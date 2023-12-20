const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} id={props.name} />
    </>
  );
};

export default Input;
