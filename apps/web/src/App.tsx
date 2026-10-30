import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation";
import { Home, Events } from "./pages/";
import { Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Background stays fixed and behind everything */}{" "}
      {/* Added flex, flex-col, and a larger gap */}
      <Navbar />
      <div style={{ paddingTop: "var(--navbar-height)" }} />
      <main className="flex-1">
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
