import "./CommentsList.scss";
import { Comment } from "../Comment/Comment";

export function CommentsList({ selectedVideo }) {
  const { comments } = selectedVideo;

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
