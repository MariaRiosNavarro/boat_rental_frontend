const BoatItem = (props) => {
  // Handle Images
  const imgPath = props?.img || "";
  let path;

  if (imgPath.includes("images")) {
    path = import.meta.env.VITE_BACKEND_URL + "/" + props.img;
  } else {
    path = "/img/placeholder.jpg";
  }
  // Handle Reservation
  const isReserved = props.rentals.some((r) => r.referenceBootId === props._id);

  const firstReservation = props.rentals.find(
    (r) => r.referenceBootId === props._id
  );

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
      <div className="max-w-[30%]">
        <div className="card w-96 bg-secondary shadow-xl">
          <figure className="h-[15rem] overflow-hidden relative">
            {isReserved && (
              <div className="absolute t-8 r-2 p-4 border-8 border-red-100 bg-base-100">
                RESERVED from <span>{start}</span> to <span>{end}</span>
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
              <div className="badge badge-base-100">{props.boattype}</div>
              <div className="badge  badge-base-100">{props.boatsubtype}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatItem;
