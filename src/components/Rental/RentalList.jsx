import RentalItem from "./RentalItem";

const RentalList = ({ rentals }) => {
  return (
    <>
      <div className="flex flex-col  gap-8 pb-[10rem]">
        {rentals.map((rent) => (
          <RentalItem key={rent._id} {...rent} />
        ))}
      </div>
    </>
  );
};

export default RentalList;
