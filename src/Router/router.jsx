import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import UpadateToy from "../Pages/UpdateToy/UpadateToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //  errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>,
          loader:()=> fetch('http://localhost:5000/toys')
        },
        {
          path:'/addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
          },
          {
            path:'/allToys',
            element:<AllToys></AllToys>,
            loader:()=> fetch('http://localhost:5000/toys')
            },
            {
              path:'/updateToy/:id',
            element:<UpadateToy></UpadateToy>,
            loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
              path:'/toyDetails/:id',
              element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
             loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
            },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
        path:'/register',
        element:<Register></Register>
        }
      ]
    },
    
  ]);

  export default router;