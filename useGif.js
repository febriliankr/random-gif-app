import { useState, useEffect } from "react";
import axios from "axios";

const key = process.env.key;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;

export default function useGif(tag) {

const [gif, setGif ] = useState('')

  const fetchGif = async () => {
    //fetch data api
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  }; 

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);
  
  return {gif, fetchGif};

};
