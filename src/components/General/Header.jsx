import { NavLink } from "react-router-dom";
import RudderSvg from "../svg/RudderSvg";
import AnchorSvg from "../svg/AnchorSvg";
import BoatSvg from "../svg/BoatSvg";

const Header = (props) => {
  return (
    <>
      <header className="bg-secondaryColor  p-4 w-[100vw]">
        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold text-primaryColor px-4">
            PROPS
          </span>
          <RudderSvg />
          <span className="text-4xl font-bold text-primaryColor px-4">
            BOATS
          </span>
        </div>
        <nav>
          <NavLink to="/boats">
            <BoatSvg />
          </NavLink>
          <NavLink>
            <AnchorSvg />
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
