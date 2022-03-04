import toastRun from '../../utils/toastRun';

export default function TableAction({ row }) {
  const handleDelete = () => {
    console.log(row);
    toastRun.success('Kelas baru berhasil ditambahkan!');
  };

  return (
    <div className="flex content-center gap-1 my-1.5">
      <button className="btn btn-error text-xs min-h-8 h-8 px-3" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}
