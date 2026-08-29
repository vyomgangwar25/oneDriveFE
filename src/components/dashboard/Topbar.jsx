const Topbar = () => {
    return (
        <header className="flex flex-col gap-4 border-b border-[#e5ebe5] bg-[#fbfcfa] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
            <p className="text-sm font-semibold text-[#8b9990]">Thursday, August 28</p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-[#173a2d]">Good morning, Alex</h1>
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
