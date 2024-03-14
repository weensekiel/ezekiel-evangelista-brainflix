import "./CommentsForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

export function CommentsForm() {
  return (
    <section className="comment-form">
      <div>
        {/* //profile photo */}
        <img src={avatar} alt="profile avatar" className="comment-form__avatar" />
      </div>
      <div className="comment-form__input">
        <label>
          JOIN THE CONVERSATION
          <input type="text" placeholder="Add a new comment" className="comment-form__box"/>
        </label>
        <button className="comment-form__button">COMMENT</button>
      </div>
    </section>
  );
}
