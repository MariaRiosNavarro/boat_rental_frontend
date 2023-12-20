const Header = (props) => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <>
      <header>
        <h1>PROPSBOATS</h1>
      </header>
    </>
  );
};

Header.propTypes = {
  property: PropTypes.string,
};

export default Header;
