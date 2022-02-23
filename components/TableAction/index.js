export default function TableAction({ row }) {
    const handleInfo = (e) => {
        e.preventDefault();
        alert(`
            Nama: ${row.name}
            Deskripsi: ${row.description}
            Slug: ${row.slug}
            Harga: ${row.price}
            Tanggal Penutupan: ${row.closed_at}
        `);
    }
    const handleDelete = (e) => {
        e.preventDefault();
        alert(`
            DELETE !!
            Row ID: ${row.id}
        `);
    }

    return (
        <div className="flex content-center gap-1 my-1.5">
            <button className="btn btn-info text-xs min-h-8 h-8 px-3" onClick={handleInfo}>!!</button>
            <button className="btn btn-error text-xs min-h-8 h-8 px-3" onClick={handleDelete}>X</button>
        </div>
    );
}