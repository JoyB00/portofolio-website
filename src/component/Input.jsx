export default function Input({ label, id, type, ...props }) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-start text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded-2xl border bg-black px-5 py-4 leading-tight text-white shadow focus:outline-none"
        id={id}
        name={id}
        type={type}
        placeholder={label}
        {...props}
      />
    </div>
  );
}
