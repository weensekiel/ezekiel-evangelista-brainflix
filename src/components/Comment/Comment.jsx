import "./Comment.scss";

export function Comment({ comment }) {
  let { name, timestamp } = comment;

  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  today = mm + "/" + dd + "/" + yyyy;

  timestamp = today;

  return (
    <section className="comment">
      <hr />
        <span className="comment__placeholder"></span>
      <div className="comment__content-header">
        <p className="comment__name">{name}</p>
        <p className="comment__date">{timestamp}</p>
      </div>

      <p className="comment__content">{comment.comment}</p>
    </section>
  );
}
