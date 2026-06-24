import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkInBio from "@/pages/LinkInBio";
import Ferramentas from "@/pages/Ferramentas";
import Videos from "@/pages/Videos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkInBio />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
