import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { VideoList } from "./components/VideoList/VideoList";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[1]);

  const selectVideo = (selectedVideoId) => {
    console.log("video selected", selectedVideoId);
    const nextVideo = videoDetailsData.find(video => video.id === selectedVideoId);
    setSelectedVideo(nextVideo);
  }

  return (
    <>
      <Header />
      <VideoDetails currentVideo={selectedVideo} />
      <VideoList
        allVideos={videosData}
        selectedVideo={selectedVideo}
        clickedVideo={selectVideo}
      />
    </>
  );
}

export default App;
