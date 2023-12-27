import { useMyContext } from "../../context/AppFetchProvider";
import { useEffect, useState } from "react";
import { formatReservationDates } from "../../utils/formatReservationDates";

const BoatCarruselItem = (props) => {
  const { rentals } = useMyContext();
  const { onClick } = props;

  const [reservations, setReservations] = useState([]);
  const isReserved = rentals.some((r) => r.referenceBootId === props._id);

  if (!rentals) {
    return null;
  }

  useEffect(() => {
    if (isReserved) {
      const getReservationsOneBoat = async () => {
        try {
          const response = await fetch(
            import.meta.env.VITE_BACKEND_URL +
              "/api/rentals/reservations-one-boat/" +
              props._id
          );
          const result = await response.json();
          setReservations(result.data);
          console.log(reservations);
        } catch (error) {
          console.error("Error fetching reservations", error);
        }
      };
      getReservationsOneBoat();
    }
  }, []);

  // Handle Images
  const imgPath = props?.img || "";
  let path;

  if (imgPath.includes("images")) {
    path = import.meta.env.VITE_BACKEND_URL + "/" + props.img;
  } else {
    path = "/img/placeholder.jpg";
  }

  return (
    <>
      <div
        id={props._id}
        onClick={() => onClick(props._id)}
        className="carousel-item relative max-h-[40vh] w-[30%]"
      >
        {/* wenn Boat is reserved */}
        {isReserved && (
          <div className="absolute top-1 left-1 r-2 p-4  text-sm flex flex-col">
            <p className="badge badge-warning">RESERVED</p>
            {/* Render Badge with the reservations formatted dates */}
            {reservations.map((reservation, index) => {
              const { start, end } = formatReservationDates(reservation);
              return (
                <div key={index} className="badge badge-base-100">
                  From<span className="px-1">{start}</span>to
                  <span className="px-1">{end}</span>
                </div>
              );
            })}
          </div>
        )}
        <div className="absolute bottom-1 right-1">
          <div className="flex flex-col">
            <span className="badge badge-base-100 font-bold text-md">
              {props.boatname}
            </span>
            <span className="badge badge-base-100">for {props.price}€/day</span>
          </div>
        </div>
        <img className="object-cover" src={path} alt={props.name} />
      </div>
    </>
  );
};

export default BoatCarruselItem;
