import { useMyContext } from "../../context/AppFetchProvider";
import BoatCarruselItem from "./BoatCarruselItem";
const BoatCarrusel = ({ onClick }) => {
  const { boats } = useMyContext();
  return (
    <>
      <div className="carousel rounded-box max-w-[90vw] mx-h-[40vh] my-0 mx-auto">
        {boats.map((boat) => (
          <BoatCarruselItem key={boat._id} {...boat} onClick={onClick} />
        ))}
      </div>
    </>
  );
};

export default BoatCarrusel;
