import Wave from "react-wavify";
import BoatDetail from "../components/Boat/BoatDetail";

const Detail = ({ detailtype }) => {
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
      <div className="min-h-screen border border-t-[#5A848E]  border-transparent bg-[#5A848E]">
        <section className="flex flex-col gap-4 min-w-[70%] mx-auto my-0 pb-[10rem] ">
          {detailtype === "boats" ? <BoatDetail /> : <RentalDetail />}
        </section>
      </div>
    </div>
  );
};

export default Detail;
