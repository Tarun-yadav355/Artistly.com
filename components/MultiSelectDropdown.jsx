export default function MultiSelectDropdown({ options, selected, onChange }) {
  const toggleOption = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  return (
    <div className="border rounded p-2">
      {options.map((opt) => (
        <label key={opt} className="block">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggleOption(opt)}
          />{" "}
          {opt}
        </label>
      ))}
    </div>
  );
}
