import "./VideoList.scss";

export function VideoList({ videos, handleVideoSelect }) {
  if (!videos) {
    return null;
  } //DELETE THIS AND SEE WHAT HAPPENS??>?>>?>?>?>>?>?>?>>>??
  return (
    <div className="video--list">
      <h3>NEXT VIDEOS</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id} onClick={() => handleVideoSelect(video)}>
            <div className="video--thumbnail">
              <img src={video.image} alt={video.title} />
            </div>
            <div className="video--details">
              <h4 className="video--title">{video.title}</h4>
              <p className="video--channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
