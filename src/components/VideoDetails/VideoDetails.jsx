import "./VideoDetails.scss";

export default function VideoDetails(props) {
    console.log(("VideoDetails props: ", props));

  const { channel, image, title, comments, likes, views, description, timestamp } = props.currentVideo;

  return (
    <div>
      <video controls poster={image} className="video-details__img" />
      <h2>{title}</h2>
      <hr />
      <div className="video-details">
        <div className="video-details--col1">
          <h4>By {channel}</h4>
          <p className="video-details--time">{timestamp}</p>
        </div>
        <div className="video-details--col2">
            <p className="video-details--views">{views}</p> 
            <p className="video-details--likes">{likes}</p>
        </div>
      </div>
        <hr />
        <p>{description}</p>

      <img src={props.image} alt="" />
    </div>
  );
}
