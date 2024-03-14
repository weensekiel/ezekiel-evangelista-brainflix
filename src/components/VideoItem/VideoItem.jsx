import { Link } from "react-router-dom";
import "./VideoItem.scss";

export default function VideoItem(props) {
  const { video } = props;
  const { image, title, channel } = video;

  return (
    <li className="video-item__thumbnail" >
      <Link to={`/videos/${video.id}`}>
        <img src={image} />
      </Link>
      <div className="video-item__desc">
        <p className="video-item__title">{title}</p>
        <p>{channel}</p>
      </div>
    </li>
  );
}
