import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
     const { user } = useContext(AuthContext)
     const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
    return (
        <header className="flex flex-col gap-4 border-b border-[#e5ebe5] bg-[#fbfcfa] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
            <p className="text-sm font-semibold text-[#8b9990]">{formattedDate}</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-[#173a2d]">{greeting}, {user?.username || "User"}</h1>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-1 items-center rounded-xl border border-[#e0e8e0] bg-white px-4 py-2.5 sm:w-64 sm:flex-none">
                    <span className="text-sm text-[#92a097]">Search files...</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3b562] text-sm font-black text-[#173a2d]">AD</div>
                    </div>
                    </header>
    );
};

export default Topbar;
