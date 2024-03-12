import "./Video.scss";

export function Video({ video, setVideo }) {
  return (
    <div
      className="video"
      onClick={() => {
        console.log(video.id);
        setVideo(video.id);
      }}
    ></div>
  );
}
