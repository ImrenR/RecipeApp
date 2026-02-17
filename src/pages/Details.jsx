
import {   useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Details = () => {
  
const {selectedMeal} = useSelector((state)=>state.recipeSlice) 
const navigate=useNavigate();
 


 return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-3">{selectedMeal.strMeal}</h2>
      <img
        src={selectedMeal.strMealThumb}
        alt={selectedMeal.strMeal}
        className="w-full h-64 object-cover rounded mb-4"
      />
      
      <p className="text-gray-600">{selectedMeal.strInstructions}</p>
      <p className="mt-3 text-red-300 text-lg">Ingredients :</p>
      
      <h4 className="text-gray-500">{selectedMeal.strIngredient1}</h4>
      <h4 className="text-gray-500">{selectedMeal.strIngredient2}</h4>
      <h4 className="text-gray-500">{selectedMeal.strIngredient3}</h4>
      <h4 className="text-gray-500">{selectedMeal.strIngredient4}</h4>
      <h4 className="text-gray-500">{selectedMeal.strIngredient5}</h4>
      <button className="text-white mt-3 m-auto rounded px-3 py-3 bg-blue-400 text-center hover:bg-red-500 transition-all"
    onClick={()=>navigate("/")}
      >GO BACK</button>
    </div>
  )
}

export default Details