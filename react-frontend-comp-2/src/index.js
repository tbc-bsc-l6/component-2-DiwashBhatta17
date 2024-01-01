import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingMainComponent from "./Pages/Customer/LandingPage/LandingMainComponent";
import CategoryPage from "./Pages/Customer/Category/CategoryPage";
import { Provider } from "react-redux";
import store from "./Services/Redux-Service/store";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRestaurant from "./Pages/Admin/AdminSellers";
import Adminrider from "./Pages/Admin/AdminPets";
import Adminreview from "./Pages/Admin/Adminreview";
import AdminHeader from "./Pages/Admin/AdminHeader";

const routeConfig = createBrowserRouter([
  {
    path: "/a",
    element: <LandingMainComponent />,
  },
  {
    path: "categorie",
    element: <CategoryPage />,
  },

  {
    path: "/",
    element: <AdminHeader />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/adminRestaurant",
    element: <AdminRestaurant />,
  },
  {
    path: "/adminRider",
    element: <Adminrider />,
  },
  {
    path: "/adminreviews",
    element: <Adminreview />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App />  */}
    <RouterProvider router={routeConfig} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
