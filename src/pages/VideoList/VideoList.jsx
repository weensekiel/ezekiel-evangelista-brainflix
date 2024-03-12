import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem"
import axios from "axios";
import { useEffect, useState } from "react";

export function VideoList(props) {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "ccecc0b2-411b-4d17-b94d-f6623bb9a6e7";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=ccecc0b2-411b-4d17-b94d-f6623bb9a6e7");
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
      // https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=ccecc0b2-411b-4d17-b94d-f6623bb9a6e7
    }
    getData();
  }, [])

  return (
    <div className="video-list">
      <hr />
      <h4>NEXT VIDEOS</h4>
      <ul>
        {
          data.map((video) => (
            <VideoItem 
            key={video.id}
            video={video}
            selected={props.selectedVideo}
            clickedVideo={props.clickedVideo}
            />
          ))
        }
      </ul>
    </div>
  );
};
