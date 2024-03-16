import "./CommentsList.scss";
import { Comment } from "../Comment/Comment";

export function CommentsList(props) {
  const { selectedVideo } = props;

  

  return (
    <ul className="comment-list">
      {selectedVideo.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
