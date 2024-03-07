import "./MainVideo.scss";

export function MainVideo({ video, comments }) {
  if (!comments) {
    return null;
  }
  return (
    <div className="main-video">
      <div className="video-container">
        <video
          poster={video.videoUrl}
          title={video.title}
          allowFullScreen
        ></video>
      </div>
      <div className="video-details">
        <h2 className="video-title">{video.title}</h2>
        <p className="video-views">{video.views} views</p>
        <p className="video-date">{video.uploadDate}</p>
        <p className="video-description">{video.description}</p>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p className="comment-user">{comment.user}</p>
              <p className="comment-text">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
