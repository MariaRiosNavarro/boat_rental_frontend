import { useMyContext } from "../../context/AppFetchProvider";

const RentalItem = (props) => {
  const { boats } = useMyContext();

  //search Boat data to this reservation

  let documentBoat = props.documentBoat;

  const boatData = boats.filter((boat) => boat._id === documentBoat)[0];

  let name = boatData ? boatData.boatname : "Unknown Boat";
  let price = boatData ? boatData.price : "Unknown Price";

  // handle bonus

  const bonusSymbol = props.bonus ? "★" : "☆";

  // handle dates
  const startDate = new Date(props.daystart);
  const endDate = new Date(props.dayend);

  const formattedStart = `${startDate.getDate().toString().padStart(2, "0")}-${(
    startDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${startDate.getFullYear()}`;
  const formattedEnd = `${endDate.getDate().toString().padStart(2, "0")}-${(
    endDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${endDate.getFullYear()}`;

  return (
    <>
      <div className="collapse bg-base-200 cursor-pointer">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium relative">
          <p className="text-xl font-medium absolute left-3">
            {props.username}
          </p>
          <span className="pl-4 absolute right-[4rem]">{bonusSymbol}</span>
          <span className="pl-4 absolute right-1">↓</span>
        </div>
        <div className="collapse-content">
          <div className="flex gap-4">
            <span>from</span>
            <span>{formattedStart}</span>
            <span>to</span>
            <span>{formattedEnd}</span>
          </div>
          <div className="flex gap-4">
            <span>Boot:</span>
            <span>{name}</span>
            <span>Price</span>
            <span>{price} €/day</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalItem;
