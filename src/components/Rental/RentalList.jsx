import { useMyContext } from "../../context/AppFetchProvider";
import RentalItem from "./RentalItem";

const RentalList = () => {
  const { rentals } = useMyContext();
  return (
    <>
      <div className="flex flex-col  gap-8 pb-[20rem]">
        {rentals?.map((rent) => (
          <RentalItem key={rent._id} {...rent} />
        ))}
      </div>
    </>
  );
};

export default RentalList;
