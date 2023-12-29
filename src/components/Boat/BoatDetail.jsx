import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/AppFetchProvider";
import EditBoat from "./EditBoat";

const BoatDetail = () => {
  const { setRefresh } = useMyContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [boat, setBoat] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [edit, setEdit] = useState(false);

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

  // HANDEL EDIT

  const openEdit = () => {
    setEdit((prev) => !prev);
  };

  return (
    <>
      {/* --------------------------------------deleteMessage Handling */}
      {deleteMessage ? (
        <div className="flex flex-col justify-center items-center gap-[2rem] relative top-[16rem]">
          <p className="bg-secondary p-8 text-center">{deleteMessage}</p>
          <Link to="/boats">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      ) : (
        <article className="flex flex-col justify-center items-center w-[100%] mx-auto my-0  bg-[#5A848E] pb-[10rem] px-[5rem]">
          {/* --------------------------------------MAIN DETAIL PAGE */}
          <div className="flex flex-col lg:flex-row gap-8 w-[100%]">
            {/* --------------------------------------IMG */}
            <figure className="lg:w-[40%] h-[60vh] overflow-hidden">
              <img
                src={path}
                className="w-md object-cover w-[100%] h-[60vh] rounded-lg shadow-2xl"
              />
            </figure>
            {/* --------------------------------------edit Handling*/}
            {edit ? (
              <EditBoat boat={boat} onClick={openEdit} />
            ) : (
              <div className="lg:w-[60%]">
                {/* --------------------------------------MAIN DETAIL PAGE - Text */}
                {/* --------------------------------------boatname */}
                <h1 className="text-5xl font-bold pb-[1rem]">
                  {boat?.boatname}
                </h1>

                {/* Badge Group */}
                <div className="flex gap-[0.5rem]">
                  {/* --------------------------------------year*/}
                  <div
                    className={`badge badge-base-100 mb-[0.5rem] ${
                      boat.year ? "visible" : "invisible"
                    }`}
                  >
                    {boat?.year}
                  </div>
                  {/* --------------------------------------price*/}
                  <div
                    className={`badge badge-base-100 mb-[0.5rem] ${
                      boat.price ? "visible" : "invisible"
                    }`}
                  >
                    {boat?.price} € /day
                  </div>
                </div>

                {/* Badge Group */}
                <div className="flex gap-[0.5rem]">
                  <div className="card-actions justify-end">
                    {/* --------------------------------------type*/}
                    <div
                      className={`badge badge-secondary ${
                        boat.boattype ? "visible" : "invisible"
                      }`}
                    >
                      {boat.boattype}
                    </div>
                    {/* --------------------------------------subtype */}
                    <div
                      className={`badge  badge-secondary ${
                        boat.boatsubtype ? "visible" : "invisible"
                      }`}
                    >
                      {boat.boatsubtype}
                    </div>
                  </div>
                  {/* -------------------------------------MATERIALS - ARRAY*/}
                  <div className="card-actions justify-end">
                    {boat.material?.map((item, index) => (
                      <div key={index} className={`badge badge-secondary`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* END BADGEs */}
                {/* -------------------------------------Description*/}
                <p className="py-6">{boat?.description}</p>
                {/* INFO GROUP */}
                <div className="flex justify-center items-center gap-[2rem]">
                  <div>
                    {/* --------------------------------------skyper */}
                    <p className="font-bolder text-l">
                      Need a Skipper:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat?.skipper ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------autopilot*/}
                    <p className="font-bolder text-l">
                      Autopilot:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat?.autopilot ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------cabins*/}
                    <p className="font-bolder text-l">
                      Cabins:{" "}
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat?.cabins}
                      </span>
                    </p>
                    {/* -------------------------------------Bathrooms*/}
                    <p className="font-bolder text-l">
                      Bathrooms:{" "}
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat?.bathrooms}
                      </span>
                    </p>
                  </div>
                  <div>
                    {/* --------------------------------------meter*/}
                    <p className="font-bolder text-l">
                      Meter:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat?.meter}
                      </span>
                    </p>
                    {/* --------------------------------------airconditioner*/}
                    <p className="font-bolder text-l">
                      Air Conditoner:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat.airconditioner ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------wifi*/}
                    <p className="font-bolder text-l">
                      WIFI:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat.wifi ? "Yes" : "No"}
                      </span>
                    </p>
                    {/* --------------------------------------hotwater*/}
                    <p className="font-bolder text-l">
                      Hot water:
                      <span className="pl-4 font-extrabold text-secondary">
                        {boat.hotwater ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Button Group */}
                <div className="flex gap-[2rem] my-[0.5rem]">
                  <Link to="/boats">
                    <button className="btn btn-primary">Back</button>
                  </Link>
                  <button onClick={openEdit} className="btn btn-warning">
                    Edit
                  </button>
                  <button onClick={deleteBoat} className="btn btn-warning">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </article>
      )}
    </>
  );
};

export default BoatDetail;
