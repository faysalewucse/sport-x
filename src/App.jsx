import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import Statistics from "./pages/Statistics";
import ScatterPlot from "./pages/ScatterPlot";
import FaqPage from "./pages/FaqPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams/Teams";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/statistics/:id",
        element: <Statistics />,
      },
      {
        path: "/scatterplot",
        element: <ScatterPlot />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
