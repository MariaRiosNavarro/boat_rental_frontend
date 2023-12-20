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
      <h2>{listType === "boats" ? "Boats" : "Rentals"}</h2>
      <section>{listType === "boats" ? <BoatsList /> : <RentalList />}</section>
    </div>
  );
};

export default List;
