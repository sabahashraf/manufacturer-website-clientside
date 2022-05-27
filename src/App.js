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
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import MyProfile from "./Pages/DashBoard/MyProfile";
import Users from "./Pages/DashBoard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireOnlyUser from "./Pages/Login/RequireOnlyUser";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/quote" element={<Quote></Quote>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="myOrders"
            element={
              <RequireOnlyUser>
                <MyOrders></MyOrders>
              </RequireOnlyUser>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="addReview"
            element={
              <RequireOnlyUser>
                <AddReview></AddReview>
              </RequireOnlyUser>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
