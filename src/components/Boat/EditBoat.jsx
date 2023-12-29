import { useState, useRef } from "react";
import { useMyContext } from "../../context/AppFetchProvider";

const EditBoat = ({ boat, onClick }) => {
  const [message, setMessage] = useState(null);
  const { setRefresh } = useMyContext();

  //   Boleans States - checkboxes
  const [skipper, setSkipper] = useState(boat?.skipper || false);
  const [autopilot, setAutopilot] = useState(boat?.autopilot || false);
  const [airconditioner, setAirconditioner] = useState(
    boat?.airconditioner || false
  );
  const [wifi, setWifi] = useState(boat?.wifi || false);
  const [hotwater, setHotwater] = useState(boat?.hotwater || false);

  const boatNameRef = useRef(); //String
  const boatTypeRef = useRef(); //String
  const boatSubtypeRef = useRef(); //String
  const descriptionRef = useRef(); //String
  const priceRef = useRef(); //Number
  const cabinsRef = useRef(); //Number
  const bathroomRef = useRef(); //Number
  const yearRef = useRef(); //Number
  const meterRef = useRef(); //Number

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("boatname", boatNameRef.current.innerText);
    form.append("boattype", boatTypeRef.current.innerText);
    form.append("boatsubtype", boatSubtypeRef.current.innerText);
    form.append("description", descriptionRef.current.innerText);
    // Numbers
    form.append("price", Number(priceRef.current.innerText));
    form.append("cabins", Number(cabinsRef.current.innerText));
    form.append("year", Number(yearRef.current.innerText));
    form.append("meter", Number(meterRef.current.innerText));
    // Booleans
    form.append("skipper", skipper);
    form.append("airconditioner", airconditioner);
    form.append("autopilot", autopilot);
    form.append("wifi", wifi);
    form.append("hotwater", hotwater);

    const updateBoatData = Object.fromEntries(form);
    const headers = { "Content-Type": "application/json" };

    console.log("before", updateBoatData);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/boats/" + boat._id,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(updateBoatData),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        // Toast
        setMessage(result.message);
        setTimeout(() => {
          setMessage("");
        }, 2400);

        throw new Error("Network response was not ok");
      } else {
        // Toast;
        setMessage(result.message);
        setTimeout(() => {
          setMessage("");
          setRefresh((prev) => !prev);
        }, 4000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="lg:w-[60%]">
      <form onSubmit={handleSubmit}>
        {/* --------------------------------------boatname - STRING */}
        <h1
          contentEditable
          ref={boatNameRef}
          className="text-5xl font-bold pb-[1rem] h-[4rem] my-2"
        >
          {boat.boatname}
        </h1>

        {/* Badge Group */}

        <div className="flex gap-[0.5rem] pb-[1rem]">
          {/* --------------------------------------year - NUMBER*/}
          <div
            contentEditable
            ref={yearRef}
            className={`badge badge-base-100 mb-[0.5rem]`}
          >
            {boat.year}
          </div>
          {/* --------------------------------------price - NUMBER*/}
          <div className={`badge badge-base-100 mb-[0.5rem]`}>
            <span ref={priceRef} contentEditable>
              {boat.price}
            </span>
            <span>€ /day</span>
          </div>
        </div>

        <div className="flex gap-[0.5rem]">
          {/* Badge Group */}
          <div className="card-actions justify-end">
            {/* --------------------------------------type - STRING*/}
            <div
              ref={boatTypeRef}
              contentEditable
              className={`badge badge-secondary `}
            >
              {boat.boattype}
            </div>
            {/* --------------------------------------subtype - STRING */}
            <div
              ref={boatSubtypeRef}
              contentEditable
              className={`badge  badge-secondary`}
            >
              {boat.boatsubtype}
            </div>
          </div>
        </div>
        {/* END BADGEs */}
        {/* -------------------------------------Description - STRING*/}

        <p
          ref={descriptionRef}
          contentEditable
          className="py-6 text-2xl font-bold"
        >
          {boat.description}
        </p>

        {/* INFO GROUP */}

        <div className="flex flex-col gap-8">
          <div className="flex  gap-4 ">
            {/* Group of ALL Numbers */}

            {/* --------------------------------------meter - NUMBER*/}
            <p className="label-text  font-bold text-xl">
              Meter:
              <span
                ref={meterRef}
                contentEditable
                className="pl-4 font-extrabold text-secondary text-xl"
              >
                {boat.meter === null ? "0" : boat.meter}
              </span>
            </p>
            {/* --------------------------------------cabins - NUMBER*/}
            <p className="font-bold label-text text-xl">
              Cabins:
              <span
                ref={cabinsRef}
                contentEditable
                className="pl-4 font-extrabold text-secondary text-xl"
              >
                {boat.cabins === null ? "0" : boat.cabins}
              </span>
            </p>
            {/* -------------------------------------Bathrooms - NUMBER*/}
            <p className="font-bold label-text  text-xl">
              Bathrooms:
              <span
                ref={bathroomRef}
                contentEditable
                className="pl-4 font-extrabold text-secondary text-xl"
              >
                {boat.bathrooms === null ? "0" : boat.bathrooms}
              </span>
            </p>
          </div>
          {/* Group of ALL Boolean-checkboxes */}
          <div className="flex gap-4 pb-[2rem]">
            {/* Group of 3 Boolean */}
            <div>
              {/* --------------------------------------skipper - BOOLEAN*/}

              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-xl pr-[1rem]">
                    Need a Skipper:
                  </span>
                  <input
                    type="checkbox"
                    checked={skipper}
                    onChange={() => setSkipper((prev) => !prev)}
                    className="checkbox checkbox-primary bg-base-100"
                  />
                </label>
              </div>

              {/* --------------------------------------autopilot - BOOLEAN*/}
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-xl pr-[1rem]">
                    Autopilot:
                  </span>
                  <input
                    type="checkbox"
                    checked={autopilot}
                    onChange={() => setAutopilot((prev) => !prev)}
                    className="checkbox checkbox-primary bg-base-100"
                  />
                </label>
              </div>
              {/* --------------------------------------airconditioner - BOOLEAN*/}
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-xl pr-[1rem]">
                    Air Conditioner:
                  </span>
                  <input
                    type="checkbox"
                    checked={airconditioner}
                    onChange={() => setAirconditioner((prev) => !prev)}
                    className="checkbox checkbox-primary bg-base-100"
                  />
                </label>
              </div>
            </div>
            {/* Group of 2 Boolean */}
            <div>
              {/* --------------------------------------wifi - BOOLEAN*/}
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-xl pr-[1rem]">
                    WIFI:
                  </span>
                  <input
                    type="checkbox"
                    checked={wifi}
                    onChange={() => setWifi((prev) => !prev)}
                    className="checkbox checkbox-primary bg-base-100"
                  />
                </label>
              </div>

              {/* --------------------------------------hotwater - BOOLEAN*/}
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-xl pr-[1rem]">
                    Hot water:
                  </span>
                  <input
                    type="checkbox"
                    checked={hotwater}
                    onChange={() => setHotwater((prev) => !prev)}
                    className="checkbox checkbox-primary bg-base-100"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/*--------------- EDIT message */}
        {message && (
          <div className="p-4 bg-secondary flex justify-center rounded-3xl m-4">
            <p className="text-2xl">{message}</p>
          </div>
        )}

        {/* Button Group */}
        <div className="flex gap-[2rem] my-[0.5rem]">
          <button onClick={onClick} className="btn btn-primary">
            Close Edit
          </button>
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBoat;
