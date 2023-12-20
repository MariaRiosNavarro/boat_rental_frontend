import { NavLink } from "react-router-dom";
import RudderSvg from "../svg/RudderSvg";
import AnchorSvg from "../svg/AnchorSvg";
import BoatSvg from "../svg/BoatSvg";
import Wave from "react-wavify";

const Header = () => {
  return (
    <>
      <header className="bg-bgColor pb-0 mb-0 pl-0 ml-0  w-[100vw] flex flex-col justify-end h-[auto] border border-b-[5rem] border-bgColor z-40">
        <NavLink to="/">
          <div className="flex items-center justify-center h-[auto] ">
            <span className="text-4xl font-bold text-primaryColor px-4 h-[auto]">
              PROPS
            </span>
            <RudderSvg />
            <span className="text-4xl font-bold text-primaryColor px-4 h-[auto]">
              BOATS
            </span>
          </div>
        </NavLink>
        <nav className="flex justify-around h-[auto]  z-40 border-transparent">
          <NavLink to="/boats" className="w-[4rem] z-40">
            <div className="max-w-[4rem] max-h-[4rem] z-40">
              <BoatSvg />
            </div>
          </NavLink>
          <NavLink to="/rentals" className="w-[4rem] h-[auto]z-40 ">
            <div className="max-w-[4rem] max-h-[4rem] h-[auto] z-40">
              <AnchorSvg />
            </div>
          </NavLink>
        </nav>
        <div className="relative w-[100vw]">
          <Wave
            className="w-[100vw] absolute top-0 pl-0 ml-0 left-[-1px]"
            fill="#8ECDDD"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 5,
              amplitude: 50,
              speed: 0.15,
              points: 3,
            }}
          />
          <Wave
            className="w-[100vw] absolute top-[2rem] pl-0 ml-0 left-[-1px]"
            fill="#7FB8C6"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 1,
              amplitude: 50,
              speed: 0.08,
              points: 3,
            }}
          />
          <Wave
            className="w-[100vw] absolute top-[6rem] pl-0 ml-0 left-[-1px]"
            fill="#65939E"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 1,
              amplitude: 20,
              speed: 0.28,
              points: 3,
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
