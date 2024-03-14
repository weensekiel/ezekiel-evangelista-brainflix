import "./VideoDetails.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails({ data, video }) {
  // CHANGE THS SIDO:AIDJ:AWIJDOAIWJD+++++++
  // let today = new Date();
  // let yyyy = today.getFullYear();
  // let mm = today.getMonth() + 1;
  // let dd = today.getDate();
  // today = mm + "/" + dd + "/" + yyyy;

  // timestamp = today;

  return (
    <div>
      <video controls poster={video.image} className="video-details__img" />
      <h1>{video.title}</h1>
      <div className="video-details">
        <div className="video-details__col1">
          <h4>By {video.channel}</h4>
          <p className="video-details__time">{video.timestamp}</p>
        </div>
        <div className="video-details__col2">
          <div className="video-details__col2 video-details__views">
            <img src={viewsIcon} alt="" />
            <p className="video-details__views">{video.views}</p>
          </div>
          <div className="video-details__col2 video-details__likes">
            <img src={likesIcon} alt="" />
            <p className="video-details__likes">{video.likes}</p>
          </div>
        </div>
      </div>
      <hr />
      <p>{video.description}</p>
      <h4>{video.comments.length} Comments</h4>
    </div>
  );
}
