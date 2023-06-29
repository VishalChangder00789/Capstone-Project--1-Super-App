import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "categories",
  initialState: ["Entertainment", "Action"],
  reducers: {
    addCategories(state, action) {
      state.push(action.payload);
    },

    removeCategory(state, action) {
      console.log(action.payload);
      return state.filter((c) => c !== action.payload);
    },
  },
});

export default CategorySlice;
export const { addCategories, removeCategory } = CategorySlice.actions;
