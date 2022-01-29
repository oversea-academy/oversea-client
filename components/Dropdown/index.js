export default function Dropdown({data, selected}) {
    return (
    <div className="
        my-3 p-0.5 w-full rounded-full
        bg-gradient-to-r from-primary to-accent
        focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40
    ">
        <select
            onChange={(e) => selected(e.target.value)}
            className="
            w-full rounded-full py-2 px-4
            bg-primary-content text-gray-700 text-sm
            focus:outline-none focus:placeholder-transparent
            "
        >
            {data.map(({ value, label }, idx) => <option value={value}>{label}</option>)}
        </select>
    </div>
  );
}