import { useState, useEffect } from "react";
import axios from "axios";
import useGif from "../useGif"

export default function Tag() {
  const [tag, setTag] = useState("NBA");
  const {gif, fetchGif} = useGif(tag);

  const handleClick = () => fetchGif(tag);

  return (
    <>
      <div>
        <h2>Random {tag} Gif</h2>
        <img width="500" src={gif} alt="gif" />
      </div>
      <input value={tag} onChange={(e) => setTag(e.target.value)} onSubmit={handleClick}/>
      <div>
        <button onClick={handleClick}>NEW</button>
      </div>
    </>
  );
}
