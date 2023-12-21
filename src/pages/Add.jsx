import Wave from "react-wavify";
import BoatForm from "../components/Boat/BoatForm";
import RentalForm from "../components/Rental/RentalForm";

const Add = ({ formType }) => {
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
          {formType === "boats" ? <BoatForm /> : <RentalForm />}
        </section>
      </div>
    </div>
  );
};

export default Add;
