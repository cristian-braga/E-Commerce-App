const CustomInput = ({ type, name, placeholder, classname }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={`form-control ${classname}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;