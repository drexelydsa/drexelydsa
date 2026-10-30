import "./App.css";
import { Navbar } from "./components/navigation";
import Events from "./pages/Events";
import Home from "./pages/Home";
import { Footer } from "./components";

function App() {
  return (
    <>
      {/* Background stays fixed and behind everything */}
      <div className="fixed top-0 left-0 w-full h-full bg-background-secondary -z-10" />

      <div className="flex flex-col gap-12">
        {" "}
        {/* Added flex, flex-col, and a larger gap */}
        <Navbar />
        <Home />
        <Events />
        <Footer />
      </div>
    </>
  );
}

export default App;
