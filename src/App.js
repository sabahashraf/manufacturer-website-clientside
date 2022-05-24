import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Dashboard from "./Pages/DashBoard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer";
import Quote from "./Pages/Home/Quote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/tool/:id" element={<Purchase></Purchase>}></Route>
        <Route path="/quote" element={<Quote></Quote>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
