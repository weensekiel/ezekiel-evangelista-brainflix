import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

export function UploadForm() {
  const navHome = () => {
    navigate("/");
  };
  const navigate = useNavigate();

  function clickHandler() {
    alert("Upload successful");
    navHome();
  }
  return (
    <main className="upload-form">
      <hr />
      <h2>Upload Video</h2>
      <div className="upload-form__container">
        <div className="upload-form__thumbnail-container">
          <p className="upload-form__title">VIDEO THUMBNAIL</p>
          <img
            src={thumbnail}
            alt="video thumbnail"
            className="upload-form__thumbnail"
          />
        </div>
        <form className="upload-form__inputs">
          <label htmlFor="videoTitle" className="upload-form__title--label">
            TITLE YOUR VIDEO
          </label>
          <input
            name="videoTitle"
            type="text"
            placeholder="Add a title to your video"
            className="upload-form__input upload-form__input-title"
          />

          <label htmlFor="videoDesc" className="upload-form__title--label">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            name="videoDesc"
            type="text"
            placeholder="Add a description to your video"
            className="upload-form__input upload-form__input-desc"
          />
        </form>
      </div>
      <div className="upload-form__buttons">
        <button
          onClick={clickHandler}
          className="upload-form__button upload-form__button--upload"
        >
          PUBLISH
        </button>
        <button className="upload-form__button upload-form__button--cancel">
          CANCEL
        </button>
      </div>
    </main>
  );
}
