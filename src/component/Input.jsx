export default function Input({ label, id, type, props }) {
  return (
    <div class="mb-4">
      <label
        class="mb-2 block text-start text-sm font-bold text-gray-700"
        for={id}
      >
        {label}
      </label>
      <input
        class="focus:shadow-outline w-full appearance-none rounded-2xl border px-5 py-4 leading-tight text-gray-700 shadow focus:outline-none"
        id={id}
        name={id}
        type={type}
        placeholder={label}
      />
    </div>
  );
}
