import { useState } from "react";
import { getirData } from "../../features/recipeSlice";
import RecipeCard from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {

  
  const [query, setQuery] = useState("");
  const { loading, foods } = useSelector((state) => state.recipeSlice);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getirData(query));
  };

  if (loading) return <p>LOADING....</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-5 rounded shadow-lg">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Search .."
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-blue-500 transition"
        >
          SEARCH
        </button>
      </form>

      <div>
        {foods &&
          foods.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default Header;
