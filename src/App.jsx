import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { VideoList } from "./pages/VideoList/VideoList.jsx";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import VideoDetails from "./pages/VideoDetails/VideoDetails.jsx";
import { CommentsForm } from "./pages/CommentsForm/CommentsForm.jsx";
import { CommentsList } from "./pages/CommentsList/CommentsList.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadForm } from "./pages/UploadForm/UploadForm.jsx";
import { VideoPlayer } from "./pages/VideoPlayer/VideoPlayer.jsx";

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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
          // <VideoPlayer />
           <>
              <VideoDetails currentVideo={selectedVideo} />
              <CommentsForm />
              <CommentsList selectedVideo={selectedVideo} />
              <VideoList
                allVideos={videosData}
                selectedVideo={selectedVideo}
                clickedVideo={selectVideo}
              />
            </>
        }
        />
        <Route path="/upload" element={<UploadForm />} />
        {/* Route for the upload form */}
      </Routes>

      {/* <VideoDetails currentVideo={selectedVideo} />
      <CommentsForm />
      <CommentsList selectedVideo={selectedVideo} />
      <VideoList
        allVideos={videosData}
        selectedVideo={selectedVideo}
        clickedVideo={selectVideo}
      /> */}
    </BrowserRouter>
  );
}

export default App;
