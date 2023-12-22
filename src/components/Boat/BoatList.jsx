import BoatItem from "./BoatItem";
import { useMyContext } from "../../context/AppFetchProvider";
const BoatList = () => {
  const { boats } = useMyContext();
  return (
    <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 pb-[15rem] tablet:px-[3rem] gap-[3rem] mx-auto my-0">
      {boats?.map((boat) => (
        <BoatItem key={boat._id} {...boat} />
      ))}
    </div>
  );
};

export default BoatList;
