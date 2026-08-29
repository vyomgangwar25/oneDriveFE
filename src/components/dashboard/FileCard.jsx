const FileCard = ({ name, type, size, color }) => {
    return <article className="group rounded-2xl border border-[#e5ebe5] bg-white p-4 transition hover:-translate-y-1 hover:border-[#bdd5c4] hover:shadow-lg hover:shadow-[#244f3a]/[0.08]">
        <div className={`flex h-32 items-center justify-center rounded-xl ${color}`}>
            <span className="text-4xl font-black text-white/90">{type}</span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-[#244334]">{name}</h3>
                <p className="mt-1 text-xs text-[#92a097]">{size}</p>
                </div>
                <button className="text-lg font-black text-[#9aaa9f]" type="button" aria-label={`More options for ${name}`}>...</button>
                </div>
                </article>;
};

export default FileCard;
