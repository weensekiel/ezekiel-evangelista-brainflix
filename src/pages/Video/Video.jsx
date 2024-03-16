
import { CommentsForm } from "../../components/CommentsForm/CommentsForm";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import { CommentsList } from "../../components/CommentsList/CommentsList";
import { VideoList } from "../../components/VideoList/VideoList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Video(props) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { data } = props;

  const { videoId } = useParams();
  const id = videoId ?? data[0].id;

  useEffect(() => {
    async function getVideoData() {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=ccecc0b2-411b-4d17-b94d-f6623bb9a6e7`
        );
        setSelectedVideo(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getVideoData();
  }, [videoId]);

  if (!selectedVideo) {
    return <div>loading...</div>;
  }

  return (
    <>
      <VideoDetails data={data} video={selectedVideo} />
      <CommentsForm />
      <CommentsList selectedVideo={selectedVideo} data={data} />
      <VideoList data={data} />
    </>
  );
}
