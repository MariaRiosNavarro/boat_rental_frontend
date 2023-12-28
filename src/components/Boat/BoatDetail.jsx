import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/AppFetchProvider";

const BoatDetail = () => {
  const { setRefresh } = useMyContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [boat, setBoat] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchOneBoat = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/boats/" + id
        );
        const responseData = await response.json();
        if (!response.ok) {
          console.log("response no", responseData);
        } else {
          setLoading(false);
          setBoat(responseData.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOneBoat();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!boat) {
    return <h1>Boat not found</h1>;
  }

  // Handle Images

  const imgPath = boat?.img || "";
  let path;

  if (imgPath.includes("https://res.cloudinary")) {
    path = boat.img;
  } else {
    path = "/img/placeholder.jpg";
  }

  // Frontend: BoatDetail.jsx

  const deleteBoat = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/boats/" + id,
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
          <Link to="/boats">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      ) : (
        <article className="hero min-h-screen bg-[#5A848E] pb-[10rem]">
          <div className="hero-content flex-col lg:flex-row">
            <img src={path} className="max-w-md rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold pb-[1rem]">{boat?.boatname}</h1>

              <div className="flex gap-[0.5rem]">
                <div
                  className={`badge badge-base-100 mb-[0.5rem] ${
                    boat.year ? "visible" : "invisible"
                  }`}
                >
                  {boat?.year}
                </div>
                <div
                  className={`badge badge-base-100 mb-[0.5rem] ${
                    boat.price ? "visible" : "invisible"
                  }`}
                >
                  {boat?.price} € /day
                </div>
              </div>
              <div className="flex gap-[0.5rem]">
                <div className="card-actions justify-end">
                  <div
                    className={`badge badge-secondary ${
                      boat.boattype ? "visible" : "invisible"
                    }`}
                  >
                    {boat.boattype}
                  </div>
                  <div
                    className={`badge  badge-secondary ${
                      boat.boatsubtype ? "visible" : "invisible"
                    }`}
                  >
                    {boat.boatsubtype}
                  </div>
                </div>
                <div className="card-actions justify-end">
                  {boat.material?.map((item, index) => (
                    <div key={index} className={`badge badge-secondary`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="py-6">{boat?.description}</p>
              <div className="flex justify-center items-center gap-[2rem]">
                <div>
                  <p className="font-bolder text-l">
                    Need a Skipper:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat?.skipper ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Autopilot:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat?.autopilot ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Cabins:{" "}
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat?.cabins}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Bathrooms:{" "}
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat?.bathrooms}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-bolder text-l">
                    Meter:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat?.meter}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Air Conditoner:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat.airconditioner ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    WIFI:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat.wifi ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className="font-bolder text-l">
                    Hot water:
                    <span className="pl-4 font-extrabold text-secondary">
                      {boat.hotwater ? "Yes" : "No"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-[2rem] my-[0.5rem]">
                <Link to="/boats">
                  <button className="btn btn-primary">Back</button>
                </Link>
                {/* <button className="btn btn-secondary">Edit</button> */}
                <button onClick={deleteBoat} className="btn btn-warning">
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

export default BoatDetail;
