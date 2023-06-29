import { configureStore } from "@reduxjs/toolkit";
import InputSlice from "./InputsSlice";
import CategorySlice from "./CategoriesSlice";
import CategoriesChoice from "./CategoriesChoice";

const store = configureStore({
  reducer: {
    inputs: InputSlice.reducer,
    categories: CategorySlice.reducer,
    categoryChoices: CategoriesChoice.reducer,
  },
});
export { store };
