import Homepage from "./components/HomepageComponents/Homepage";
import Hobbies from "./components/HobbiesComponents/Hobbies";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/hobbies",
      element: <Hobbies />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
