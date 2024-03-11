import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails(props) {
  // console.log(("VideoDetails props: ", props));

  let {
    channel,
    image,
    title,
    comments,
    likes,
    views,
    description,
    timestamp,
  } = props.currentVideo;

  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  today = mm + "/" + dd + "/" + yyyy;

  timestamp = today;

  return (
    <div>
      <video controls poster={image} className="video-details__img" />
      <h1>{title}</h1>
      <div className="video-details">
        <div className="video-details--col1">
          <h4>By {channel}</h4>
          <p className="video-details--time">{timestamp}</p>
        </div>
        <div className="video-details--col2">
          <div className="video-details--col2 video-details--views">
            <img src={viewsIcon} alt="" />
            <p className="video-details--views">{views}</p>
          </div>
          <div className="video-details--col2 video-details--likes">
            <img src={likesIcon} alt="" />
            <p className="video-details--likes">{likes}</p>
          </div>
        </div>
      </div>
      <hr />
      <p>{description}</p>
      <h4>{comments.length} Comments</h4>

      <img src={props.image} alt="" />
    </div>
  );
}
