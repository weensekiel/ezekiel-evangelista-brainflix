import { useState, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Video } from "./pages/Video/Video.jsx";
import { UploadForm } from "./pages/UploadForm/UploadForm.jsx";
import axios from "axios";

const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "?api_key=ccecc0b2-411b-4d17-b94d-f6623bb9a6e7";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${baseUrl}/videos${apiKey}`);
        console.log(response.data.id);
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
        <Route path="/" element={<Video data={data} />} />
        <Route path="/videos/:videoId" element={<Video data={data} />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
