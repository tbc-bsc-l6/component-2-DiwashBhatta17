import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingMainComponent from './Pages/Customer/LandingPage/LandingMainComponent';
import CategoryPage from './Pages/Customer/Category/CategoryPage';
import { Provider } from 'react-redux';
import store from './Services/Redux-Service/store';

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <LandingMainComponent/>
  },
  {
    path:"categorie",
    element: <CategoryPage/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    {/* <App />  */}
    <RouterProvider router={routeConfig}/>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
