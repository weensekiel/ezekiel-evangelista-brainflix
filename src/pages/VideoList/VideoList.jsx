import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem"

export function VideoList(props) {
  return (
    <div className="video--list">
      <hr />
      <h4>NEXT VIDEOS</h4>
      <ul>
        {
          props.allVideos.map((video) => (
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
