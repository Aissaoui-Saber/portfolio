import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Pizza from './projects/Pizza';
import RSS from './projects/RSS';
import Pistolero from './projects/Pistolero';
import Dames from './projects/Dames';
import Robot from './projects/Robot';
import GPS from './projects/GPS';
import Linkedin from './projects/Linkedin';
import Opencv from './projects/Opencv';
import Presence from './projects/Presence';
import Todo from './projects/Todo';
import Brinnng from './projects/Brinnng';
import Championship from './projects/Championship';
import Prodabri from './projects/Prodabri';
import Portfolio from './projects/Portfolio';
import OtherSkills from './sections/OtherSkills';
import language from "./language";

const root = ReactDOM.createRoot(document.getElementById('root'));
language.defineLanguage();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pizza" element={<Pizza />} />
        <Route path="rss_reader" element={<RSS />} />
        <Route path="pistolero" element={<Pistolero />} />
        <Route path="checkers" element={<Dames />} />
        <Route path="line_following_robot" element={<Robot />} />
        <Route path="gps_tracker" element={<GPS />} />
        <Route path="linkedIn_video_downloader" element={<Linkedin />} />
        <Route path="image_processing_opencv" element={<Opencv />} />
        <Route path="presence" element={<Presence />} />
        <Route path="todo" element={<Todo />} />
        <Route path="brinnng" element={<Brinnng />} />
        <Route path="championship" element={<Championship />} />
        <Route path="prodabri" element={<Prodabri />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="extra_skills" element={<OtherSkills />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
