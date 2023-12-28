import { useState, useEffect, useRef } from "react";

const EditBoat = ({ boat }) => {
  const [message, setMessage] = useState(null);

  const boatNameRef = useRef();
  const boatTypeRef = useRef();
  const boatSubtypeRef = useRef();
  const skipperRef = useRef();
  const priceRef = useRef();
  const cabinsRef = useRef();
  const yearRef = useRef();
  const descriptionRef = useRef();
  const meterRef = useRef();
  const airconditionerRef = useRef();
  const autopilotRef = useRef();
  const wifiRef = useRef();
  const hotwaterRef = useRef();

  const editBoat = async () => {
    const form = new FormData();

    form.append("boatname", boatNameRef.current.innerText);
    form.append("boattype", boatTypeRef.current.innerText);
    form.append("boatsubtype", boatSubtypeRef.current.innerText);
    form.append("skipper", skipperRef.current.innerText);
    form.append("price", priceRef.current.innerText);
    form.append("cabins", cabinsRef.current.innerText);
    form.append("year", yearRef.current.innerText);
    form.append("description", descriptionRef.current.innerText);
    form.append("meter", meterRef.current.innerText);
    form.append("airconditioner", airconditionerRef.current.innerText);
    form.append("autopilot", autopilotRef.current.innerText);
    form.append("wifi", wifiRef.current.innerText);
    form.append("hotwater", hotwaterRef.current.innerText);
    const updateBoatData = Object.fromEntries(form);
    const headers = { "Content-Type": "application/json" };

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
        }, 24000);
        throw new Error("Network response was not ok");
      } else {
        // Toast
        setMessage(result.message);
        setTimeout(() => {
          setMessage("");
        }, 24000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <article className="p-[10rem]">
      <h1 className="py-8 text-secondaryColor_red text-3xl font-bolder">
        Edit Your Boat
      </h1>
      <div className="flex flex-col gap-4">
        {/* --------------------------------------boatname */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={boatNameRef}
          contentEditable
        >
          {boat.boatname}
        </p>
        {/* --------------------------------------type*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={boatTypeRef}
          contentEditable
        >
          {boat.boattype}
        </p>
        {/* --------------------------------------subtype */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={boatSubtypeRef}
          contentEditable
        >
          {boat.boatsubtype}
        </p>
        {/* --------------------------------------skyper */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={skipperRef}
          contentEditable
        >
          {boat.skipper}
        </p>
        {/* --------------------------------------price*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={priceRef}
          contentEditable
        >
          {boat.price}
        </p>
        {/* --------------------------------------cabins*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={cabinsRef}
          contentEditable
        >
          {boat.cabins}
        </p>
        {/* --------------------------------------year*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={yearRef}
          contentEditable
        >
          {boat.year}
        </p>
        {/* --------------------------------------meter*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={meterRef}
          contentEditable
        >
          {boat.meter}
        </p>
        {/* --------------------------------------airconditioner*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={airconditionerRef}
          contentEditable
        >
          {boat.airconditioner}
        </p>
        {/* --------------------------------------autopilot*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={autopilotRef}
          contentEditable
        >
          {boat.autopilot}
        </p>
        {/* --------------------------------------wifi*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={wifiRef}
          contentEditable
        >
          {boat.wifi}
        </p>
        {/* --------------------------------------hotwater*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={hotwaterRef}
          contentEditable
        >
          {boat.hotwater}
        </p>

        {/* --------------------------------------Description*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={descriptionRef}
          contentEditable
        >
          {boat.description}
        </p>

        {/*--------------- message */}
        {message && (
          <div className="p-4 bg-secondaryColor_red flex justify-center rounded-3xl">
            <p className="text-2xl">{message}</p>
          </div>
        )}
        <input
          type="submit"
          onClick={editBoat}
          className="btn text-3xl bg-primaryColor_green text-bgColor_darkgreen rounded-[50px] p-4 h-auto cursor-pointer hover:bg-transparent hover:border-primaryColor_green hover:text-accentColor_yellow"
        />
      </div>
    </article>
  );
};

export default EditBoat;
