import Button from "../General/Button";
import Input from "../General/Input";
import BoatCarrusel from "../Boat/BoatCarrusel";
import { useState } from "react";

const RentalForm = () => {
  const [selectedId, setSelectedId] = useState("");
  const [rentalFormData, setRentalFormData] = useState({
    username: "",
    daystart: new Date(),
    dayend: new Date(),
    bonus: false,
  });

  const handleId = (clickedId) => {
    setSelectedId(clickedId);
  };

  const saveRentForm = () => {
    console.log("hallo");
  };

  return (
    <>
      <h1 className="text-2xl text-base-100 font-bold text-center">
        Select Your Boat:
      </h1>
      <form
        onSubmit={saveRentForm}
        className="mx-auto my-0 flex flex-col items-center gap-4"
      >
        <BoatCarrusel onClick={(id) => handleId(id)} />
        {selectedId && (
          <p type="p-4 bg-base-100 w-full max-w-xs mx-auto my-0">
            Boat ID selected:{selectedId}
          </p>
        )}

        <Button value="Save" type="submit" />
      </form>
    </>
  );
};

export default RentalForm;
