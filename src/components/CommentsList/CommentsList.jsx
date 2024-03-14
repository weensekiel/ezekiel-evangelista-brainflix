import "./CommentsList.scss";
import { Comment } from "../Comment/Comment";
import { useState } from "react";

export function CommentsList(props) {
  const { selectedVideo } = props;
  console.log(selectedVideo.comments);

  const [comments, setComments] = useState([]);


  return (
    <ul className="comment-list">
      {selectedVideo.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
