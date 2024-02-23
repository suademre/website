import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NavBar from "./components/molekuls/NavBar";
import Shopping from "./pages/Shopping";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:slug" element={<Categories />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
