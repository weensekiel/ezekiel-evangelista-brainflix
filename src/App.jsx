import { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoPage } from "./pages/VideoPage/VideoPage.jsx";
import { UploadFormPage } from "./pages/UploadFormPage/UploadFormPage.jsx";
import axios from "axios";

const serverUrl = import.meta.env.VITE_BRAINFLIX_API;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${serverUrl}/videos`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoPage data={data} />} />
        <Route path="/videos/:videoId" element={<VideoPage data={data} />} />
        <Route path="/upload" element={<UploadFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
