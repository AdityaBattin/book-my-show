import "./App.css";

//routing
import { Routes, Route } from "react-router-dom";

//axios
import axios from "axios";

//react-slick-css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import the pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlaysPage from "./Pages/PlaysPage";

//default route for api
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "7c5d623169408d6327164584170caf1b";
axios.defaults.params["language"] = "en-US";
axios.defaults.params["page"] = "1";

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
