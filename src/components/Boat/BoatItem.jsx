import { useEffect, useState } from "react";
import { useMyContext } from "../../context/AppFetchProvider";
import { formatReservationDates } from "../../utils/formatReservationDates";

const BoatItem = (props) => {
  const { rentals } = useMyContext();
  const [reservations, setReservations] = useState([]);
  const isReserved = rentals.some((r) => r.referenceBootId === props._id);

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
      <div className="max-w-[30%]">
        <div className="card w-96 bg-secondary shadow-xl">
          <figure className="h-[15rem] overflow-hidden relative">
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
            <img className="object-cover min-h-[15rem]" src={path} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.boatname}
              <div className="badge badge-primary"> {props.year}</div>
            </h2>
            <div className="h-[15rem] overflow-hidden">
              <p className="">{props.description}</p>
            </div>
            <div className="card-actions justify-end">
              <div
                className={`badge badge-base-100 ${
                  props.boattype ? "visible" : "invisible"
                }`}
              >
                {props.boattype}
              </div>
              <div
                className={`badge  badge-base-100 ${
                  props.boatsubtype ? "visible" : "invisible"
                }`}
              >
                {props.boatsubtype}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatItem;
