function CommonInput({ label, type, name, id, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
