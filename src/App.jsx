import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
