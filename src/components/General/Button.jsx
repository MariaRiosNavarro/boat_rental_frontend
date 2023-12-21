const Button = (props) => {
  return (
    <>
      <input
        className="btn btn-secondary w-[50%] mx-auto my-0"
        type={props.type}
        value={props.value}
      />
    </>
  );
};

export default Button;
