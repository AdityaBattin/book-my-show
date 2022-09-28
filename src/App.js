import "./App.css";

//routing
import { Routes, Route } from "react-router-dom";

//react-slick-css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import the pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlaysPage from "./Pages/PlaysPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlaysPage />}></Route>
    </Routes>
  );
}

export default App;
