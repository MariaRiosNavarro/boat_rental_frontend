const BoatItem = (props) => {
  return (
    <>
      <div className="max-w-[30%]">
        <div className="card w-96 bg-secondary shadow-xl">
          <figure className="h-[15rem] overflow-hidden">
            <img
              className="object-cover min-h-[15rem]"
              src={import.meta.env.VITE_BACKEND_URL + "/" + props.img}
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.boatname}
              <div className="badge badge-primary"> {props.year}</div>
            </h2>
            <div className="h-[15rem] overflow-hidden">
              <p className="">{props.description}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-base-100">{props.boattype}</div>
              <div className="badge  badge-base-100">{props.boatsubtype}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatItem;
