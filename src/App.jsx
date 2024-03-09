import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { VideoList } from "./components/VideoList/VideoList";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import { CommentsForm } from "./components/CommentsForm/CommentsForm.jsx";
import { CommentsList } from "./components/CommentsList/CommentsList.jsx";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  const selectVideo = (selectedVideoId) => {
    console.log("video selected", selectedVideoId);
    const nextVideo = videoDetailsData.find(
      (video) => video.id === selectedVideoId
    );
    setSelectedVideo(nextVideo);
  };

  return (
    <>
      <Header />
      <VideoDetails currentVideo={selectedVideo} />
      <CommentsForm />
      <CommentsList selectedVideo={selectedVideo} /> {/* Display comments for the selected video */}
      <VideoList
        allVideos={videosData}
        selectedVideo={selectedVideo}
        clickedVideo={selectVideo}
      />
    </>
  );
}

export default App;
