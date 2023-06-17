import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./login/login";
import Home from "./login/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
