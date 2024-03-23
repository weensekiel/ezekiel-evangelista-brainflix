import React from "react";
import "./UploadFormPage.scss";
import axios from "axios";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

const serverUrl = import.meta.env.VITE_BRAINFLIX_API;

export function UploadFormPage() {
  const navigate = useNavigate();

  async function postNewVideo(videoData) {
    try {
      const response = await axios.post(`${serverUrl}/videos`, videoData);
      alert("Upload successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Upload failed. Please try again");
    }
  }

  function cancelHandler() {
    navigate("/");
  }

  function publishHandler(e) {
    e.preventDefault();
    const title = e.target.videoTitle.value;
    const description = e.target.videoDesc.value;

    if (!title || !description) {
      alert("Please fill out all fields and try again");
      return;
    }

    const videoData = {
      title,
      description
    };

    postNewVideo(videoData);
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
        <form className="upload-form__inputs" onSubmit={publishHandler}>
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
          <div className="upload-form__buttons">
            <button
              type="submit"
              className="upload-form__button upload-form__button--upload"
            >
              PUBLISH
            </button>
            <button
              type="button"
              onClick={cancelHandler}
              className="upload-form__button upload-form__button--cancel"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
