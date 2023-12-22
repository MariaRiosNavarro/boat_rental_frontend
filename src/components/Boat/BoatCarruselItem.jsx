import { useMyContext } from "../../context/AppFetchProvider";

const BoatCarruselItem = (props) => {
  const { rentals } = useMyContext();

  if (!rentals) {
    // You might want to render a loading state or handle this case differently.
    return null;
  }
  // Handle Images
  const imgPath = props?.img || "";
  let path;

  if (imgPath.includes("images")) {
    path = import.meta.env.VITE_BACKEND_URL + "/" + props.img;
  } else {
    path = "/img/placeholder.jpg";
  }
  // Handle Reservation
  const isReserved = rentals.some((r) => r.referenceBootId === props._id);

  const firstReservation = rentals.find((r) => r.referenceBootId === props._id);

  // Handle Dates Output

  let start, end;

  if (firstReservation) {
    const startDate = new Date(firstReservation.daystart);
    const endDate = new Date(firstReservation.dayend);
    // Start
    const formattedStart = `${startDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(startDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${startDate.getFullYear()}`;

    // End
    const formattedEnd = `${endDate.getDate().toString().padStart(2, "0")}-${(
      endDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${endDate.getFullYear()}`;

    start = firstReservation ? formattedStart : "";
    end = firstReservation ? formattedEnd : "";
  }
  return (
    <>
      <div
        id={props._id}
        className="carousel-item relative max-h-[40vh] w-[30%]"
      >
        {isReserved && (
          <div className="absolute top-1 left-1 r-2 p-4 border-8 border-red-100 bg-base-100 text-sm">
            RESERVED from <span className="block">{start}</span> to{" "}
            <span className="block">{end}</span>
          </div>
        )}
        <div className="absolute bottom-1 right-1">
          <p>
            <span>{props.boatname}</span> for <span>{props.price}</span>€/day
          </p>
        </div>
        <img className="object-cover" src={path} alt={props.name} />
      </div>
    </>
  );
};

export default BoatCarruselItem;
