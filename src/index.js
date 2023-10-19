import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { route } from 'fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
//import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/js/jquery.min.js';
import 'mdbootstrap/js/bootstrap.min.js';
// import Popper from './popper.js';
// import 'fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Contactlist from './components/Contact/contactlist/Contactlist';

import EditContact from './components/Contact/editContact/EditContact';
import ViewContact from './components/Contact/viewContact/ViewContact';
import AddContact from './components/Contact/createContact/AddContact';

const router = createBrowserRouter([

  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/Contactlist",
    element:<Contactlist/>
  },
  {
    path: '/ViewContact/:Contactid',
    element: <ViewContact />
  },
 
  {
    path:"/CreateContact/:Contactid",
    element:<AddContact/>
  },
  {
    path:"/EditContact/:Contactid",
    element:<EditContact/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Login",
    element:<Login/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
