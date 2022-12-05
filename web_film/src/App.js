import "./App.css";
import Intro from "./components/Intro";
import "./styles/landingPage.css";
import Trending from "./components/Trending";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Trending /> */}
      <div className="trending"></div>
    </>
  );
}

export default App;
