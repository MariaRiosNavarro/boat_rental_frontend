import Button from "../General/Button";
import Input from "../General/Input";
import { useState } from "react";

const BoatForm = () => {
  const [message, setMessage] = useState("");
  const [useFile, setUseFile] = useState(false);
  const [formData, setFormData] = useState({
    boatname: "",
    boattype: "",
    boatsubtype: "",
    price: "",
    cabins: "",
    bathrooms: "",
    year: "",
    description: "",
    meter: "",
    material: [],
    skipper: false,
    airconditioner: false,
    autopilot: false,
    wifi: false,
    hotwater: false,
    img: null,
  });

  //Handle Files

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    setFormData({ ...formData, img: file });
  };

  //handle Material
  const handleMaterialChange = (event) => {
    const materialSeleted = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      material: materialSeleted,
    });
  };

  //Handle SAVE

  const saveBoat = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("boatname", formData.boatname);
    formDataToSend.append("boattype", formData.boattype);
    formDataToSend.append("boatsubtype", formData.boatsubtype);
    formDataToSend.append("skipper", formData.skipper);
    formDataToSend.append("material", JSON.stringify(formData.material));
    formDataToSend.append("price", formData.price);
    formDataToSend.append("cabins", formData.cabins);
    formDataToSend.append("bathrooms", formData.bathrooms);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("meter", formData.meter);
    formDataToSend.append("airconditioner", formData.airconditioner);
    formDataToSend.append("autopilot", formData.autopilot);
    formDataToSend.append("wifi", formData.wifi);
    formDataToSend.append("hotwater", formData.hotwater);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/boats",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      const result = await response.json();
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // } else {
      console.log(result);

      // }
    } catch (error) {
      console.error("Error Message-------->", error);
    }
  };

  return (
    <>
      <h2 className="text-[2rem] text-base-100 font-bolder text-center p-4">
        Add the Boat
      </h2>

      <form onSubmit={saveBoat} className="flex flex-col gap-4  mx-auto my-0 ">
        {/* text */}
        <Input
          name="boatname"
          label="Boat Name: "
          type="text"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          name="boattype"
          label="Boat type: "
          type="text"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          name="boatsubtype"
          label="Boat subtype: "
          type="text"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          name="description"
          label="Description: "
          type="text"
          formData={formData}
          setFormData={setFormData}
        />

        {/* number */}
        <Input
          name="cabins"
          label="Cabins number: "
          type="number"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          name="bathrooms"
          label="Bathroom number: "
          type="number"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          name="year"
          label="Year: "
          type="number"
          formData={formData}
          setFormData={setFormData}
        />

        {/* Checkbox */}
        <div className="flex gap-2 flex-wrap mx-auto my-0 pl-[8rem]">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text pr-4">Is a skipper necessary?</span>
              <input
                name="skipper"
                type="checkbox"
                className="toggle toggle-secondary"
                checked={formData.skipper}
                onChange={(e) =>
                  setFormData({ ...formData, skipper: e.target.checked })
                }
              />
            </label>
          </div>

          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Airconditioner:</span>
              <input
                type="checkbox"
                name="airconditioner"
                className="toggle toggle-secondary"
                checked={formData.airconditioner}
                onChange={(e) =>
                  setFormData({ ...formData, airconditioner: e.target.checked })
                }
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Autopilot: </span>
              <input
                name="autopilot"
                type="checkbox"
                className="toggle toggle-secondary"
                checked={formData.autopilot}
                onChange={(e) =>
                  setFormData({ ...formData, autopilot: e.target.checked })
                }
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Wifi: </span>
              <input
                name="wifi"
                type="checkbox"
                className="toggle toggle-secondary"
                checked={formData.wifi}
                onChange={(e) =>
                  setFormData({ ...formData, wifi: e.target.checked })
                }
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Hotwater: </span>
              <input
                name="hotwater"
                type="checkbox"
                className="toggle toggle-secondary"
                checked={formData.hotwater}
                onChange={(e) =>
                  setFormData({ ...formData, hotwater: e.target.checked })
                }
              />
            </label>
          </div>
        </div>

        {/* file */}
        <input
          type="file"
          name="img"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs mx-auto my-0"
        />
        {/* select options */}
        <select
          multiple
          // value={formData.material}
          className="select select-primary w-full max-w-xs mx-auto my-0"
          onChange={handleMaterialChange}
        >
          <option value="plastic">Plastic</option>
          <option value="wood">Wood</option>
          <option value="carbon">Carbon</option>
          <option value="metal">Metal</option>
        </select>
        <Button type="submit" value="Save" />
      </form>
    </>
  );
};

export default BoatForm;
