import RudderSvg from "../svg/RudderSvg";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-">PROPS</span>{" "}
          <RudderSvg />
          <span className="text-4xl font-bold">BOATS</span>
        </div>
      </header>
    </>
  );
};

export default Header;
