import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {path: "*", Component: () => {
    return (
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='/ingredients' element={<Ingredients />} />
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
