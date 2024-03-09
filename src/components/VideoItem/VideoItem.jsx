import "./VideoItem.scss";

export default function VideoItem(props) {
  //   console.log("PlantItem: ", props);
  const { video, clickedVideo } = props;
  const { image, title, channel } = video;

  const handleClick = () => {
    clickedVideo(video.id);
  };

  return (
    <li className="video-item__thumbnail" onClick={handleClick}>
      <img src={image} />

      {title}
      {channel}
    </li>
  );
}
