import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/AppFetchProvider";

const RentalDetail = () => {
  const { setRefresh } = useMyContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [reservation, setReservation] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchOneReservation = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/rentals/" + id
        );
        const responseData = await response.json();
        if (!response.ok) {
          console.log("response no", responseData);
        } else {
          setLoading(false);
          setReservation(responseData.boat);
          console.log(responseData.boat);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOneReservation();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Handle Images

  const imgPath = reservation?.documentBoat.img || "";
  let path;

  if (imgPath.includes("https://res.cloudinary")) {
    path = reservation.documentBoat.img;
  } else {
    path = "/img/placeholder.jpg";
  }

  // handle dates
  const startDate = new Date(reservation?.daystart);
  const endDate = new Date(reservation?.dayend);

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

  const deleteReservation = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/rentals/" + id,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setRefresh((prev) => !prev);
        setDeleteMessage(responseData.message);
      } else {
        const errorData = await response.json();
        console.log("errordata", errorData);
        console.log("Error deleting boat:", errorData.message);
        setDeleteMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Error deleting boat:", error);
      setDeleteMessage("Network error. Please try again.");
    }
  };

  return (
    <>
      {/* --------------------------------------deleteMessage Handling */}
      {deleteMessage ? (
        <div className="flex flex-col justify-center items-center gap-[2rem] relative top-[16rem]">
          <p className="bg-secondary p-8 text-center">{deleteMessage}</p>
          <Link to="/rentals">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      ) : (
        <article className="hero min-h-screen bg-[#5A848E] pb-[10rem]">
          {/* --------------------------------------MAIN DETAIL PAGE */}
          <div className="hero-content flex-col lg:flex-row lg:gap-[2rem]">
            {/* --------------------------------------IMG */}
            <figure className="lg:w-[40%] h-[60vh] overflow-hidden">
              <img
                src={path}
                className="w-md object-cover w-[100%] h-[60vh] rounded-lg shadow-2xl"
              />
            </figure>
            <div className="lg:w-[60%]">
              {/* --------------------------------------boatname*/}
              <h1 className="text-5xl font-bold pb-[1rem] h-[auto] my-2">
                RESERVATION:
                <span className="block">
                  {reservation?.documentBoat.boatname}
                </span>
              </h1>
              {/* USER INFOS */}
              <div className="bg-secondary p-4 my-4 rounded-xl flex flex-col gap-4">
                {/* --------------------------------------username*/}
                <h2 className="font-bold text-xl">
                  Username: {reservation?.username}
                </h2>
                {/* --------------------------------------bonusstatus*/}
                <h3 className="font-bold text-xl">
                  Bonus: {reservation?.bonus ? "Yes" : "No"}
                </h3>
              </div>
              {/* Badge Group */}
              <div className="flex gap-[0.5rem] pb-[1rem]">
                {/* --------------------------------------reservations days*/}
                <div className={"badge badge-base-100 mb-[0.5rem]"}>
                  <span className="px-2">from </span>
                  {formattedStart} <span className="px-2">to </span>{" "}
                  {formattedEnd}
                </div>
                {/* --------------------------------------price/day*/}
                <div
                  className={`badge badge-base-100 mb-[0.5rem] ${
                    reservation?.documentBoat.price ? "visible" : "invisible"
                  }`}
                >
                  {reservation?.documentBoat.price} € /day
                </div>
              </div>

              <div className="flex gap-[0.5rem]">
                <div className="card-actions justify-end">
                  {/* --------------------------------------type*/}
                  <div
                    className={`badge badge-secondary ${
                      reservation?.documentBoat.boattype
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    {reservation?.documentBoat.boattype}
                  </div>
                  {/* --------------------------------------subtype*/}
                  <div
                    className={`badge  badge-secondary ${
                      reservation?.documentBoat.boatsubtype
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    {reservation?.documentBoat.boatsubtype}
                  </div>
                </div>
                {/* --------------------------------------materials-array*/}
                <div className="card-actions justify-end">
                  {reservation?.documentBoat.material?.map((item, index) => (
                    <div key={index} className={`badge badge-secondary`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* END BADGEs */}
              {/* -------------------------------------Description*/}
              <p className="py-6 text-2xl font-bold">
                {reservation?.documentBoat.description}
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex  gap-4 ">
                  {/* Group of ALL Numbers */}
                  {/* --------------------------------------meter*/}
                  <p className="font-bold text-xl">
                    Meter:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.meter}
                    </span>
                  </p>
                  {/* --------------------------------------cabins*/}
                  <p className="font-bold text-xl">
                    Cabins:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.cabins}
                    </span>
                  </p>
                  {/* -------------------------------------Bathrooms*/}
                  <p className="font-bold text-xl">
                    Bathrooms:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.bathrooms}
                    </span>
                  </p>
                </div>
                {/* Group of ALL Boolean */}
                <div className="flex gap-4 pb-[2rem]">
                  {/* Group of 3 Boolean */}
                  <div>
                    {/* --------------------------------------skyper */}
                    <p className="font-bold text-xl">
                      Need a Skipper:
                      <span className="pl-4 font-extrabold text-secondary">
                        {reservation?.documentBoat.skipper ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------autopilot*/}
                    <p className="font-bold text-xl">
                      Autopilot:
                      <span className="pl-4 font-extrabold text-secondary">
                        {reservation?.documentBoat.autopilot ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------airconditioner*/}
                    <p className="font-bold text-xl">
                      Air Conditoner:
                      <span className="pl-4 font-extrabold text-secondary">
                        {reservation?.documentBoat.airconditioner
                          ? "Yes"
                          : "No"}
                      </span>
                    </p>
                  </div>
                  {/* Group of 2 Boolean */}
                  <div>
                    <p className="font-bold text-xl">
                      WIFI:
                      <span className="pl-4 font-extrabold text-secondary">
                        {reservation?.documentBoat.wifi ? "Yes" : "No"}
                      </span>
                    </p>
                    <p className="font-bold text-xl">
                      Hot water:
                      <span className="pl-4 font-extrabold text-secondary">
                        {reservation?.documentBoat.hotwater ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Button Group */}
              <div className="flex gap-[2rem] my-[0.5rem]">
                <Link to="/rentals">
                  <button className="btn btn-primary">Back</button>
                </Link>
                <button onClick={deleteReservation} className="btn btn-warning">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default RentalDetail;
