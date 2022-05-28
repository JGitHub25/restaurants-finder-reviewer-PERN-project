import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { EditRestaurantPage } from "./pages/EditRestaurant.page";
import { HomePage } from "./pages/Home.page";
import { NotFoundPage } from "./pages/NotFound.page";
import { SingleRestaurantPage } from "./pages/SingleRestaurant.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="restaurants/:id" element={<SingleRestaurantPage />} />
          <Route path="restaurants/edit/:id" element={<EditRestaurantPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
