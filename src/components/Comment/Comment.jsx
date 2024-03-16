import "./Comment.scss";

export function Comment({ comment }) {
  let { name, timestamp } = comment;

  const date = new Date(timestamp).toLocaleDateString();

  return (
    <section className="comment">
      <hr />
        <span className="comment__placeholder"></span>
      <div className="comment__content-header">
        <p className="comment__name">{name}</p>
        <p className="comment__date">{date}</p>
      </div>

      <p className="comment__content">{comment.comment}</p>
    </section>
  );
}
