import "./VideoPlayer.scss"
import VideoDetails from "../VideoDetails/VideoDetails"
import { useState } from "react";

export function VideoPlayer() {
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
        <VideoDetails />
        </>
    );
}