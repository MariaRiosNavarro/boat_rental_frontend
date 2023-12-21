const Input = (props) => {
  return (
    <>
      <label className="mx-auto my-0 text-2xl font-bolder" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="input input-bordered input-secondary w-full max-w-xs mx-auto my-0"
        value={props.formData.name}
        onChange={(e) =>
          props.setFormData({ ...props.formData, [props.name]: e.target.value })
        }
      />
    </>
  );
};

export default Input;
