import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'addbook',
        element: <AddBook />
      },
      {
        path: 'allbooks',
        element: <AllBooks />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);
import './index.css'
import Home from './Pages/Home.jsx';
import AddBook from './features/book/AddBook.jsx';
import AllBooks from './features/book/AllBooks.jsx';
import Error from './Pages/Error.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
