import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation";
import { Home, Events } from "./pages/";
import { Footer } from "./components";

function App() {
  return (
    <>
      {/* Background stays fixed and behind everything */}{" "}
      {/* Added flex, flex-col, and a larger gap */}
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
