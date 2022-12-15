import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
  return (
    <div className="absolute bg-gray-400 bg-opacity-40 z-10 w-full h-full left-0 top-0 flex justify-center items-center">
      <BeatLoader color="#a855f7" speedMultiplier={0.7} />
    </div>
  );
};

export default Loading;
