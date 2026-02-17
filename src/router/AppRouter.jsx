import { Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default AppRouter;
