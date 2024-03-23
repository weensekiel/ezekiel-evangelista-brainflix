import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails({ video }) {
  video.timestamp = new Date(video.timestamp).toLocaleDateString();

  return (
    <section>
      <video controls poster={video[0].image} className="video-details__img" />
      <h1 className="video-details__title">{video[0].title}</h1>
      <div className="video-details">
        <div className="video-details__col1">
          <h4>By {video[0].channel}</h4>
          <p className="video-details__time">{video[0].timestamp}</p>
        </div>
        <div className="video-details__col2">
          <div className="video-details__col2 video-details__views">
            <img src={viewsIcon} alt="view icon" />
            <p className="video-details__views">{video[0].views}</p>
          </div>
          <div className="video-details__col2 video-details__likes">
            <img src={likesIcon} alt="likes icon" />
            <p className="video-details__likes">{video[0].likes}</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="video-details__desc">{video[0].description}</p>
      <h4 className="video-details__comments">{video[0].comments.length} Comments</h4>
    </section>
  );
}
