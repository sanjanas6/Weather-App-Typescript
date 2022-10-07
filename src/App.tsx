import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Capital from "./pages/Capital";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/capital" element={<Capital state={null}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

