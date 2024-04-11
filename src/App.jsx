import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodCard from "./CategoryGrid/CategoryGrid";
import MealsByCategoryGrid from "./MealByCategoryGrid/MealsByCategoryGrid";
import Meal from "./Meals/Meal";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<FoodCard  />} />
        <Route path="/Category/:id" element={<MealsByCategoryGrid />} />
        <Route path="/Meal/:id" element={<Meal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
