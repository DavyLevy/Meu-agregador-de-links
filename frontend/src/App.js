import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LinkInBio from "@/pages/LinkInBio";
import Videos from "@/pages/Videos";
import VideoSingle from "@/pages/VideoSingle";
import Ferramentas from "@/pages/Ferramentas";
import Apps from "@/pages/Apps";
import AppsAndroid from "@/pages/AppsAndroid";
import AppsIOS from "@/pages/AppsIOS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkInBio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ferramentas" element={<Navigate to="/videos" replace />} />
          <Route path="/ferramentas/:slug" element={<Ferramentas />} />
          <Route path="/v/:id" element={<VideoSingle />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/android" element={<AppsAndroid />} />
          <Route path="/apps/ios" element={<AppsIOS />} />
          <Route path="/:slug" element={<VideoSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
