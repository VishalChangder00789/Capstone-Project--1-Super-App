import React from "react";
import "./CategoryTab.css";
import { removeCategory } from "../../store/CategoriesSlice";
import { useDispatch } from "react-redux";

const CategoryTab = ({ catName }) => {
  const dispatch = useDispatch();
  const handleRemove = (catName) => {
    dispatch(removeCategory(catName));
  };

  return (
    <div className="CategoryTabContainer">
      <div className="CategoryName">{catName}</div>
      <button onClick={() => handleRemove(catName)} className="CategoryRemove">
        x
      </button>
    </div>
  );
};

export default CategoryTab;
