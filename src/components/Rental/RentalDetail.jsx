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

  // if (!reservation) {
  //   return <h1>Reservation not found</h1>;
  // }

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
      {deleteMessage ? (
        <div className="flex flex-col justify-center items-center gap-[2rem] relative top-[16rem]">
          <p className="bg-secondary p-8 text-center">{deleteMessage}</p>
          <Link to="/rentals">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      ) : (
        <article className="hero min-h-screen bg-[#5A848E] pb-[10rem]">
          <div className="hero-content flex-col lg:flex-row">
            <img src={path} className="max-w-md rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold pb-[1rem]">
                RESERVATION of: {reservation?.documentBoat.boatname}
              </h1>
              <h2>{reservation?.username}</h2>
              <h3>Bonus: {reservation?.bonus ? "Yes" : "No"}</h3>
              <div className="flex gap-[0.5rem]">
                <div className={"badge badge-base-100 mb-[0.5rem]"}>
                  <span className="px-2">from </span>
                  {formattedStart} <span className="px-2">to </span>{" "}
                  {formattedEnd}
                </div>
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
                  <div
                    className={`badge badge-secondary ${
                      reservation?.documentBoat.boattype
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    {reservation?.documentBoat.boattype}
                  </div>
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
                <div className="card-actions justify-end">
                  {reservation?.documentBoat.material?.map((item, index) => (
                    <div key={index} className={`badge badge-secondary`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="py-6">{reservation?.documentBoat.description}</p>
              <div className="flex justify-center items-center gap-[2rem]">
                <div>
                  <p className="font-bolder text-l">
                    Need a Skipper:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.skipper ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Autopilot:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.autopilot ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Cabins:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.cabins}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Bathrooms:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.bathrooms}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bolder text-l">
                    Meter:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.meter}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Air Conditoner:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.airconditioner ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    WIFI:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.wifi ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Hot water:
                    <span className="pl-4 font-extrabold text-secondary">
                      {reservation?.documentBoat.hotwater ? "Yes" : "No"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-[2rem] my-[0.5rem]">
                <Link to="/rentals">
                  <button className="btn btn-primary">Back</button>
                </Link>
                {/* <button className="btn btn-secondary">Edit</button> */}
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
