import "./App.css";
import { Routes, Route } from "react-router-dom";
import Card1 from "./Card";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/card" element={<Card1 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
