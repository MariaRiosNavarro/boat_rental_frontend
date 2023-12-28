import Button from "../General/Button";
import Input from "../General/Input";
import BoatCarrusel from "../Boat/BoatCarrusel";
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/AppFetchProvider";

const RentalForm = () => {
  const { setRefresh, boats } = useMyContext();
  const [boatReservedMessage, setBoatReservedMessage] = useState("");
  const [savedReservationMessage, setSavedReservationMessage] = useState("");
  const [selectedBoat, setSelectedBoat] = useState({
    id: "",
    boat: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    daystart: new Date(),
    dayend: new Date(),
    bonus: false,
  });

  const handleId = async (clickedId) => {
    // handle id
    const selectedBoatInfo = boats.find((boat) => boat._id === clickedId);

    setSelectedBoat({
      id: selectedBoatInfo._id,
      boat: selectedBoatInfo.boatname,
    });
  };

  const saveRentForm = async (event) => {
    event.preventDefault();

    let selectedId = selectedBoat.id;
    let start = formData.daystart;
    let end = formData.dayend;

    //check if this boat is reserved in this time
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL +
          "/api/rentals/reservation-one-boat/" +
          selectedId +
          "/" +
          start +
          "/" +
          end
      );
      const result = await response.json();

      // if reserved put a message
      setBoatReservedMessage(
        result.isReserved ? "The boat is booked on these dates" : ""
      );

      // not reserved, save the reservation
      if (!result.isReserved) {
        const saveResponse = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/rentals/" + selectedBoat.id,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData }),
          }
        );

        const saveResult = await saveResponse.json();

        if (!saveResponse.ok) {
          console.log(saveResult.message);
          throw new Error("Network response was not ok");
        } else {
          setSavedReservationMessage(saveResult.message);
          setTimeout(() => {
            setSavedReservationMessage("");
          }, 4000);
          console.log(saveResult.message);
          setRefresh((prev) => !prev);
        }
      }
    } catch (error) {
      console.error("Error Message-------->", error);
    } finally {
      event.target.reset();
    }
  };

  // Need it to  avoid choosing a date from the past

  const currentDate = new Date().toISOString().split("T")[0];

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
        <p
          className={`input input-bordered bg-secondary h-auto mx-auto my-0 p-8 ${
            selectedBoat.id ? "visible" : "invisible"
          }`}
        >
          Boat ID selected: {selectedBoat.id}
          <br />
          Boat Name: {selectedBoat.boat}
        </p>

        {boatReservedMessage && (
          <p className="bg-red-300 text-black text-xl p-4 rounded-md">
            {boatReservedMessage}
          </p>
        )}

        {savedReservationMessage && (
          <p className="bg-green-500 text-black text-xl p-4 rounded-md">
            {savedReservationMessage}
          </p>
        )}

        <div className="flex flex-col items-center gap-4">
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
            min={currentDate}
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            label="to which day"
            type="date"
            name="dayend"
            formData={formData}
            min={currentDate}
            setFormData={setFormData}
          />
          <Button value="Save" type="submit" />
        </div>
      </form>
    </>
  );
};

export default RentalForm;
