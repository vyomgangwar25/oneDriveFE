const Sidebar = () => {
    return (
        <aside className="flex w-full flex-col border-b border-[#e4e9e4] bg-[#173a2d] px-5 py-6 text-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:px-6">
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3b562] font-black text-[#173a2d]">O</div><span className="text-xl font-black tracking-tight">onedrive</span></div>
            <nav className="mt-9 flex gap-2 overflow-x-auto lg:block lg:space-y-2">
                <a className="flex min-w-max rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white" href="/dashboard">My Drive</a>
                <a className="flex min-w-max rounded-xl px-4 py-3 text-sm font-semibold text-[#b9cbc0] transition hover:bg-white/10 hover:text-white" href="/recent">Recent</a>
                <a className="flex min-w-max rounded-xl px-4 py-3 text-sm font-semibold text-[#b9cbc0] transition hover:bg-white/10 hover:text-white" href="/starred">Starred</a>
                <a className="flex min-w-max rounded-xl px-4 py-3 text-sm font-semibold text-[#b9cbc0] transition hover:bg-white/10 hover:text-white" href="/trash">Trash</a>
            </nav>
            <div className="mt-auto hidden border-t border-white/10 pt-6 lg:block"><p className="text-xs font-bold uppercase tracking-widest text-[#93aea0]">Storage</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[38%] rounded-full bg-[#f3b562]" /></div><p className="mt-3 text-xs text-[#b9cbc0]">3.8 GB of 10 GB used</p></div>
        </aside>
    );
};

export default Sidebar;
