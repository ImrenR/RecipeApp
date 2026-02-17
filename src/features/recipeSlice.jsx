import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getirData = createAsyncThunk(
  "recipeSlice/getirData",
  async (query) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );

    return res.data.meals;
  },
);

const recipeSlice = createSlice({
  name: "haberSlice",

  initialState: {
    foods: [],
    loading: false,
    selectedMeal: null,
    foodVisible:false,
  },
  reducers: {
    //datadan veri cekmek istiyorsan burayi kullanma
    goDetails: (state, { payload }) => {
      state.selectedMeal = payload;
    },

    showFoods :(state)=> {state.foodVisible=true},
     hideFoods :(state)=> {state.foodVisible=false},
  },

  extraReducers: (builder) => {
    // data cekmek icin
    builder
      .addCase(getirData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getirData.fulfilled, (state, { payload }) => {
        state.foods = payload;
        state.loading = false;
        state.foodVisible=true
      });
  },
});
export const { goDetails,hideFoods,showFoods } = recipeSlice.actions;
export default recipeSlice.reducer;
