import { useState } from "react";
import { API_BASE_URL } from "../../constants/api";

// the server re-derives every chunk's expected size from this, so it has to be
// the same value in /files/init and in the slicing below
const CHUNK_SIZE = 1024 * 1024;

const UploadButton = ({ onUploaded }) => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");

    const authHeaders = () => ({
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    });

    // the exception handler returns JSON, but a 401 from the security filter
    // comes back with an empty body, so fall back to the status code
    const readError = async (response) => {
        try {
            const body = await response.json();
            return body.message || body.error || `Request failed (${response.status})`;
        } catch {
            return `Request failed (${response.status})`;
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        // clearing it here means picking the same file again still fires onChange
        e.target.value = "";
        if (!file) return;

        setUploading(true);
        setProgress(0);
        setError("");

        try {
            // init rejects the request unless this matches ceil(totalSize / chunkSize)
            const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

            const initRes = await fetch(`${API_BASE_URL}/files/init`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...authHeaders() },
                body: JSON.stringify({
                    fileName: file.name,
                    contentType: file.type || "application/octet-stream",
                    totalSize: file.size,
                    chunkSize: CHUNK_SIZE,
                    totalChunks,
                }),
            });
            if (!initRes.ok) throw new Error(await readError(initRes));

            const { uploadId } = await initRes.json();

            for (let i = 0; i < totalChunks; i++) {
                const start = i * CHUNK_SIZE;
                const blob = file.slice(start, start + CHUNK_SIZE);

                const form = new FormData();
                // the part name has to stay "file", and it needs a filename or
                // the server reads the part as a plain field instead of an upload
                form.append("file", blob, file.name);

                // chunkNumber is 1 based on the server, and rides in the query
                // string because the controller reads it as a @RequestParam
                const chunkRes = await fetch(
                    `${API_BASE_URL}/files/${uploadId}/chunk?chunkNumber=${i + 1}`,
                    {
                        method: "POST",
                        // no Content-Type here: the browser has to add the
                        // multipart boundary itself
                        headers: authHeaders(),
                        body: form,
                    }
                );
                if (!chunkRes.ok) throw new Error(await readError(chunkRes));
                // this endpoint answers with an empty body, so nothing to parse

                setProgress(Math.round(((i + 1) / totalChunks) * 100));
            }

            const completeRes = await fetch(`${API_BASE_URL}/files/${uploadId}/complete`, {
                method: "POST",
                headers: authHeaders(),
            });
            if (!completeRes.ok) throw new Error(await readError(completeRes));

            const uploaded = await completeRes.json();
            if (onUploaded) onUploaded(uploaded);
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <input
                id="file-upload"
                type="file"
                hidden
                disabled={uploading}
                onChange={handleFileChange}
            />

            <label
                htmlFor="file-upload"
                className={`inline-block rounded-xl bg-[#1d6b4f] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1d6b4f]/20 transition ${
                    uploading
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer hover:bg-[#15543d]"
                }`}
            >
                {uploading ? (
                    `Uploading... ${progress}%`
                ) : (
                    <>
                        <span className="mr-2 text-lg leading-none">+</span>
                        Upload files
                    </>
                )}
            </label>

            {error && <p className="mt-2 text-sm font-semibold text-[#c0492f]">{error}</p>}
        </div>
    );
};

export default UploadButton;
