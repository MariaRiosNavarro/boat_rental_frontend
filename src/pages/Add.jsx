import Wave from "react-wavify";
import BoatsList from "../components/Boat/BoatList";
import RentalList from "../components/Rental/RentalList";

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
        <h2>{formType === "boats" ? "Boats" : "Rentals"}</h2>
        <section>
          {formType === "boats" ? <BoatForm /> : <RentalForm />}
        </section>
      </div>
    </div>
  );
};

export default Add;
