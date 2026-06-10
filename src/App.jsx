import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CV from "./CV";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;