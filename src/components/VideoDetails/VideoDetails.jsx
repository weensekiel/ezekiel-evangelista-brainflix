import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails({ video }) {
  video.timestamp = new Date(video.timestamp).toLocaleDateString();

  return (
    <main>
      <video controls poster={video.image} className="video-details__img" />
      <h1 className="video-details__title">{video.title}</h1>
      <div className="video-details">
        <div className="video-details__col1">
          <h4>By {video.channel}</h4>
          <p className="video-details__time">{video.timestamp}</p>
        </div>
        <div className="video-details__col2">
          <div className="video-details__col2 video-details__views">
            <img src={viewsIcon} alt="view icon" />
            <p className="video-details__views">{video.views}</p>
          </div>
          <div className="video-details__col2 video-details__likes">
            <img src={likesIcon} alt="likes icon" />
            <p className="video-details__likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="video-details__desc">{video.description}</p>
      <h4 className="video-details__comments">{video.comments.length} Comments</h4>
    </main>
  );
}
