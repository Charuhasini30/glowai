import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Salons from "./pages/Salons";
import Advisor from "./pages/Advisor";
import BridalPlanner from "./pages/BridalPlanner";
import Trends from "./pages/Trends";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/planner" element={<BridalPlanner />} />
        <Route path="/trends" element={<Trends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;