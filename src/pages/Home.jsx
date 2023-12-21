import Wave from "react-wavify";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative top-[-2rem] border-t-[#5A848E] ">
      <Wave
        className="w-[100vw] border-b-[#5A848E]"
        fill="#5A848E"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 100,
          amplitude: 50,
          speed: 0.1,
          points: 3,
        }}
      ></Wave>
      <div className="min-h-screen border border-t-[#5A848E]  border-transparent bg-[#5A848E] flex flex-col justify-center">
        <div className="stats mobile:flex mobile:flex-col shadow mx-auto my-0 relative top-[-15rem]">
          <Link to="/rentals" className="cursor-pointer">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Reservation</div>
              <div className="stat-value">4</div>
              {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
            </div>
          </Link>
          <Link to="/boats" className="cursor-pointer">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Available boats</div>
              <div className="stat-value">5</div>
              {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
            </div>
          </Link>
          <Link to="/boats" className="cursor-pointer">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">All Boats</div>
              <div className="stat-value">8</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
