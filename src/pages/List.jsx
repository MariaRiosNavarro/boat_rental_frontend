import Wave from "react-wavify";
import BoatsList from "../components/Boat/BoatList";
import RentalList from "../components/Rental/RentalList";

const List = ({ listType }) => {
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
      <div className="border border-t-[#5A848E]  border-transparent bg-[#5A848E] flex flex-col justify-center">
        <h2 className="text-[2rem] text-base-100 font-bolder text-center p-4">
          {listType === "boats" ? "Boats" : "Rentals"}
        </h2>
        <section className="mx-auto my-0">
          {listType === "boats" ? <BoatsList /> : <RentalList />}
        </section>
      </div>
    </div>
  );
};

export default List;
