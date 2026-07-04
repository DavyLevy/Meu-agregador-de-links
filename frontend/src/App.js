import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkInBio from "@/pages/LinkInBio";
import Ferramentas from "@/pages/Ferramentas";
import Videos from "@/pages/Videos";
import Apps from "@/pages/Apps";
import AppsAndroid from "@/pages/AppsAndroid";
import AppsIOS from "@/pages/AppsIOS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkInBio />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/android" element={<AppsAndroid />} />
          <Route path="/apps/ios" element={<AppsIOS />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
