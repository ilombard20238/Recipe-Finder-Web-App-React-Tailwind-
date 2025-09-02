import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_KEY`);
    const data = await res.json();
    setRecipes(data.results);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-pink-600 text-center">🍲 Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  );
}
