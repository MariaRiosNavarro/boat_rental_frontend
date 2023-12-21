import Wave from "react-wavify";

const Detail = () => {
  return (
    <div className="relative top-[-2rem] border-t-[#5A848E] ">
      <Wave
        className="w-[100vw] border-b-[#5A848E]"
        fill="#5A848E"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 100,
          amplitude: 50,
          speed: 0.1,
          points: 3,
        }}
      ></Wave>
      <div className="min-h-screen border border-t-[#5A848E]  border-transparent bg-[#5A848E]">
        <h1>Detail</h1>
      </div>
    </div>
  );
};

export default Detail;
