import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Write from "./pages/Write";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./Style.scss";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Posts />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/post",
    element: <Posts />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
