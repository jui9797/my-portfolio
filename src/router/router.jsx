import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../mainLayout/Main';
import Home from '../pages/Home/Home';
import ProjectsCard from '../pages/projects/ProjectsCard';
import Details from '../pages/projects/Details';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/projects',
          element:<ProjectsCard></ProjectsCard>
        },
        {
          path:'/projects/:id', 
          element:<Details></Details>,
         
        }
      ]
    },
  ]);

export default router;