import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation";
import { Home, Events, Campaigns, Constitution } from "./pages/";
import { Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div style={{ paddingTop: "var(--navbar-height)" }} />
      <main className="flex-1">
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/constitution" element={<Constitution />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
