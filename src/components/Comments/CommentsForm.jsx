import "./CommentsForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export function CommentsForm() {
  return (
    <section className="comment-section">
      <div>
        {/* //profile photo */}
        <img src={avatar} alt="profile avatar" className="avatar" />
      </div>
      <div>
        <label>
          JOIN THE CONVERSATION
          <input type="text" placeholder="Add a new comment" className="comment-box"/>
        </label>
        <button className="comment-button">COMMENT</button>
      </div>
    </section>
  );
}
