import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default App;
