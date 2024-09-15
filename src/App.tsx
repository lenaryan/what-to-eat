import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Main from "./pages/Main";
import { Footer } from "./components/Footer";
import { ROUTES } from "./shared/constants";
import { ShoppingList } from "./pages/ShoppingList";

const router = createBrowserRouter([
  {path: "*", Component: () => {
    return (
      <>
        <Footer />
        <Routes>
          <Route index path={ROUTES.menu} element={<Main />} />
          <Route path={ROUTES.ingredients} element={<Ingredients />} />
          <Route path={ROUTES.shoppingList} element={<ShoppingList />} />
        </Routes>
      </>
    )
  }},
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />    
    </>
  );
}

export default App
