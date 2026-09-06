import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import UploadButton from "../dashboard/UploadButton";
import FileCard from "../dashboard/FileCard";

const Dashboard = () => {
    return (
        <main className="min-h-screen bg-[#f5f7f2] text-[#173a2d] lg:flex">
            <Sidebar />
            <div className="min-w-0 flex-1">
                <Topbar />
                <section className="px-5 py-7 sm:px-8 sm:py-9">
                    <div className="flex flex-col gap-5 rounded-3xl bg-[#dcecdf] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div><p className="text-sm font-bold uppercase tracking-widest text-[#d07939]">Your space</p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-[#173a2d]">Everything in its place.</h2>
                        <p className="mt-2 text-sm text-[#607167]">Keep your files organized and easy to find.</p></div>
                        <UploadButton />
                    </div>
                    <div className="mt-9 flex items-end justify-between"><div><p className="text-sm font-semibold text-[#8b9990]">Your collection</p><h2 className="mt-1 text-2xl font-black tracking-tight">Recent files</h2></div><button className="text-sm font-bold text-[#1d6b4f] hover:underline" type="button">View all</button></div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <FileCard name="Brand guidelines.pdf" type="PDF" size="2.4 MB" color="bg-[#d07939]" />
                        <FileCard name="Summer campaign" type="IMG" size="18.6 MB" color="bg-[#6f9f83]" />
                        <FileCard name="Project proposal.docx" type="DOC" size="846 KB" color="bg-[#5b86a4]" />
                        <FileCard name="Budget overview.xlsx" type="XLS" size="1.1 MB" color="bg-[#c49a55]" />
                    </div>
                    <div className="mt-9"><h2 className="text-2xl font-black tracking-tight">Quick access</h2><div className="mt-5 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-[#e5ebe5] bg-white p-5"><p className="text-2xl">+</p><h3 className="mt-5 font-bold">Create folder</h3><p className="mt-1 text-sm text-[#8b9990]">Organize your files</p></div><div className="rounded-2xl border border-[#e5ebe5] bg-white p-5"><p className="text-2xl">*</p><h3 className="mt-5 font-bold">Starred files</h3><p className="mt-1 text-sm text-[#8b9990]">Your important files</p></div><div className="rounded-2xl border border-[#e5ebe5] bg-white p-5"><p className="text-2xl">@</p><h3 className="mt-5 font-bold">Shared with me</h3><p className="mt-1 text-sm text-[#8b9990]">Files from your team</p></div></div></div>
                </section>
            </div>
        </main>
    );
};

export default Dashboard;
