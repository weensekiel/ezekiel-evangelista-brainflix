import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

export function UploadForm() {
  return (
    <div className="upload-form">
      <hr />
      <h2>Upload Video</h2>
      <p className="upload-form__title">VIDEO THUMBNAIL</p>
      <img
        src={thumbnail}
        alt="video thumbnail"
        className="upload-form__thumbnail"
      />
      <form action="">
        <label htmlFor="videoTitle" className="upload-form__title">
          TITLE YOUR VIDEO
        </label>
        <input
          name="videoTitle"
          type="text"
          placeholder="Add a title to your video"
          className="upload-form__input upload-form__input-title"
        />

        <label htmlFor="videoDesc" className="upload-form__title">
          ADD A VIDEO DESCRIPTION
        </label>
        <input
          name="videoDesc"
          type="text"
          placeholder="Add a description to your video"
          className="upload-form__input upload-form__input-desc"
        />
      </form>

      <button className="upload-form__button upload-form__button--upload">
        PUBLISH
      </button>
      <button className="upload-form__button upload-form__button--cancel">
        CANCEL
      </button>
    </div>
  );
}
