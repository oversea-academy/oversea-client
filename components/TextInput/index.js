const TextInput = ({ placeholder, value, type = 'text', onChange }) => (
  <div
    className="
      mt-2 mb-3 p-0.5 w-full rounded-full
      bg-gradient-to-r from-primary to-accent
      focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40
    "
  >
    <input
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className="
        w-full rounded-full py-2 px-4
        bg-primary-content text-gray-700 text-sm
        focus:outline-none focus:placeholder-transparent
      "
    />
  </div>
);

export default TextInput;
