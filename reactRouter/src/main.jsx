import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from '../src/Layout.jsx';
import Home from '../src/components/Home/Home.jsx';
import About from '../src/components/About/About.jsx';
import User from '../src/components/User/User.jsx';
import Github from '../src/components/Github/Github.jsx';






// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={< About />} />
      <Route path='user/' element={< User />} >

        <Route path=":userId" element={<User />} />
      </Route>
      <Route path='github' element={<Github />} />
      <Route path='*' element={<div> Not Found </div>} />

    </Route>

  )
);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

