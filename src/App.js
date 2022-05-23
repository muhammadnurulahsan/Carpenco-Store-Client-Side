import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./Components/Purchase/Purchase";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Blog from "./Components/Blog/Blog";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/MyProfile/MyProfile";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import RequireAdmin from "./Components/RequireAdmin/RequireAdmin";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import ManageUser from "./Components/Dashboard/ManageUser/ManageUser";
import ManageOrders from "./Components/Dashboard/ManageOrders/ManageOrders";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import AllReviews from "./Components/AllReviews/AllReviews";
import useScrollToTop from "./Hooks/useScrollToTop";
import MyReview from "./Components/Dashboard/MyReview/MyReview";
import UpdateProfile from "./Components/Dashboard/UpdateProfile/UpdateProfile";
import Payment from "./Components/Dashboard/Payment/Payment";

function App() {
  useScrollToTop();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/all-reviews" element={<AllReviews />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-reviews" element={<MyReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-user"
            element={
              <RequireAdmin>
                <ManageUser />
              </RequireAdmin>
            }
          />
          <Route
            path="manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
