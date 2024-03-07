import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { VideoList } from "./components/VideoList/VideoList";
import { MainVideo } from "./components/MainVideo/MainVideo";
import { Comments } from "./components/Comments/Comments.jsx";
import videos from "./data/videos.json";
import details from "./data/video-details.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(details[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const sideVideos = videos.filter((video) => video.id !== selectedVideo.id);
  sideVideos.unshift(selectedVideo);

  return (
    <>
      <Header />
      <VideoList />
      <MainVideo video={selectedVideo} comments={details[selectedVideo.id]} />
      <Comments />
      <VideoList
        videos={videos.filter((video) => video.id !== selectedVideo.id)}
        handleVideoSelect={handleVideoSelect}
      />
    </>
  );
}

export default App;
