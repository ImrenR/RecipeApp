import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goDetails } from "../../features/recipeSlice";

const RecipeCard = ({meal}) => {
 const navigate = useNavigate();
 const dispatch= useDispatch();
const handleDetails = ()=> {
navigate(`/details/${meal.idMeal}`)
dispatch(goDetails(meal));
}


  return (
    <div className="max-w-sm mx-auto my-6 border rounded overflow-hidden shadow-lg hover:shadow-xl transition ">
      <img src={meal.strMealThumb} className="w-full h-48 object-cover" /> 
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{meal.strMeal}</h3>
      
        <p className="text-gray-400 text-sm">
          {meal.strInstructions.slice(0,60)}
        </p>
        <button
          type="button"
          className="mt-3 text-white bg-green-500 rounded py-3 px-4 hover:bg-red-400 transition-all"
        onClick={handleDetails}
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default RecipeCard;
