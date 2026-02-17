import { Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Details from "../pages/Details";
// import Login from "../pages/Login";
// import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <MyNavbar />

      <Routes>



       
   
   
          {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/" element={<PrivateRouter/>}>
              <Route path="" element={<Home />}/>
            
        </Route> */}
           <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};

export default AppRouter;
