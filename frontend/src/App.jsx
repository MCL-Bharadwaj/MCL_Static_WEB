import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import OffersScrollingBanner from "./components/OffersScrollingBanner";
import Home from './pages/Home'
import Level0 from './pages/Level0'
import Level1 from './pages/Level1'
import Level2 from './pages/Level2'
import Level3 from './pages/Level3'
import Level4 from './pages/Level4'
import Faq from './pages/Faq'
import Code2conquer from './pages/Code2conquer'
import Founders from './pages/Founders';
import Csexplorers from './pages/Csexplorers';
import Codeplay from './pages/Codeplay';
import APComputerScience from './pages/APComputerScience';
import SymposiumSeries from './pages/SymposiumSeries';


function App() {
  return (
    <Router>
      <div>
        <OffersScrollingBanner />
        {/* hi */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/level0" element={<Level0 />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/Code2conquer" element={<Code2conquer />} />
          <Route path="/ap-computer-science" element={<APComputerScience />} />
          <Route path="/symposium-series" element={<SymposiumSeries />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/csexplorers" element={<Csexplorers />} />
          <Route path="/codeplay" element={<Codeplay />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
