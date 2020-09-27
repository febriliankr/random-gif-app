import axios from "axios";
import useGif from "../useGif";

export default function Random() {
  const { gif, fetchGif } = useGif();
  const handleClick = () => fetchGif();

  return (
    <>
      <div>
        <h2>Random Gif</h2>
        <img width="500" src={gif} alt="gif" />
      </div>
      <div>
        <button onClick={handleClick}>NEW</button>
      </div>
    </>
  );
}
