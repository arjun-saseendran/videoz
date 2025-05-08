import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constants";
import { VideoCard } from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return <div className="flex flex-wrap">{videos.map(video => (<Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard  info={video} /></Link>)) }</div>;
};
