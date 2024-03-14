import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";

export function VideoList(props) {
  const { data } = props;

  return (
    <div className="video-list">
      <hr />
      <h4>NEXT VIDEOS</h4>
      <ul>
        {data.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
