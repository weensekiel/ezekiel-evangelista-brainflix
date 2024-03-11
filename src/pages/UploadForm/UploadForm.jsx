import "./UploadForm.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

export function UploadForm() {
  return (
    <div>
      <h2>Upload Video</h2>
      <p>Video Thumbnail</p>
      <img src={thumbnail} alt="video thumbnail" />
      <form action="">
        <label htmlFor="videoTitle">TITLE YOUR VIDEO</label>
        <input
          name="videoTitle"
          type="text"
          placeholder="Add a title to your video"
        />

        <label htmlFor="videoDesc">ADD A VIDEO DESCRIPTION</label>
        <input
          name="videoDesc"
          type="text"
          placeholder="Add a description to your video"
        />
      </form>

      <button>UPLOAD</button>
      <button>CANCEL</button>
    </div>
  );
}
