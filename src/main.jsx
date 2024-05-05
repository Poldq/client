import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import {RegisterForm} from './components/RegisterForm.jsx';
import {MainPage} from './components/MainPage.jsx';
import {LoginForm} from './components/LoginForm.jsx';
import {LogoutButton} from './components/LogoutButton.jsx';
import { DeleteHabitPlan } from './components/DeleteHabitPlan.jsx';
import { DisplayedHabits } from './components/DisplayHabits.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/registration",
        element: <RegisterForm />,
      },
      {
        path: "/logout",
        element: <LogoutButton/>,
      },
      {
        path:"/delete",
        element: <DeleteHabitPlan />,
      },
      {
        path:"/habits",
        element: <DisplayedHabits />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


