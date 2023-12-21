import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Main from "./pages/Main";
import { urls } from "./constants";

const router = createBrowserRouter([
  {path: "*", Component: () => {
    return (
      <Routes>
        <Route index path={urls.main} element={<Main />} />
        <Route path={urls.ingredients} element={<Ingredients />} />
      </Routes>
    )
  }},
]);

const App = () => {
  return (
    <RouterProvider router={router} />    
  );
}

export default App
