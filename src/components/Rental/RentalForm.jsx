import Button from "../General/Button";
import Input from "../General/Input";
import BoatCarrusel from "../Boat/BoatCarrusel";
import { useState } from "react";

const RentalForm = () => {
  const [selectedId, setSelectedId] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    daystart: new Date(),
    dayend: new Date(),
    bonus: false,
  });

  const handleId = (clickedId) => {
    setSelectedId(clickedId);
  };

  const saveRentForm = async (event) => {
    event.preventDefault();
    console.log(formData);
    // const formDataToSend = new FormData();
    // formDataToSend.append("username", formData.username);
    // formDataToSend.append("daystart", formData.daystart);
    // formDataToSend.append("dayend", formData.dayend);
    // formDataToSend.append("bonus", formData.bonus);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/rentals/" + selectedId,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );
    } catch (error) {}
  };

  return (
    <>
      <h1 className="text-2xl text-base-100 font-bold text-center">
        Select Your Boat:
      </h1>
      <form
        onSubmit={saveRentForm}
        className="mx-auto my-0 flex flex-col items-center gap-4 relative"
      >
        <BoatCarrusel onClick={(id) => handleId(id)} />
        {selectedId && (
          <p className="input input-bordered bg-secondary w-full max-w-xs mx-auto my-0">
            Boat ID selected:{selectedId}
          </p>
        )}

        <div className="flex flex-col items-center absolute top-[29rem]">
          <Input
            label="Your username: "
            type="text"
            name="username"
            formData={formData}
            setFormData={setFormData}
          />
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text pr-4">
                Are you a member of the Club:
              </span>
              <input
                name="bonus"
                type="checkbox"
                className="toggle toggle-secondary"
                checked={formData.bonus}
                onChange={(e) =>
                  setFormData({ ...formData, bonus: e.target.checked })
                }
              />
            </label>
          </div>

          <Input
            type="date"
            label="From which day: "
            name="daystart"
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            label="to which day"
            type="date"
            name="dayend"
            formData={formData}
            setFormData={setFormData}
          />
          <Button value="Save" type="submit" />
        </div>
      </form>
    </>
  );
};

export default RentalForm;
