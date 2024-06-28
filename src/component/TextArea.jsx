export default function TextArea({ label, id, type }) {
  return (
    <div class="mb-4">
      <label
        class="mb-2 block text-start text-sm font-bold text-gray-700"
        for={id}
      >
        {label}
      </label>
      <textarea
        class="focus:shadow-outline w-full appearance-none rounded-2xl border px-5 py-4 leading-tight text-gray-700 shadow focus:outline-none"
        rows="5"
        id={id}
        name={id}
      />
    </div>
  );
}
