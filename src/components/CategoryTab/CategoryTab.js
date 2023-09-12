import React from "react";
import "./CategoryTab.css";
import { removeCategory } from "../../store/CategoriesSlice";
import { useDispatch } from "react-redux";

const CategoryTab = ({ cat }) => {
  const dispatch = useDispatch();
  const handleRemove = (cat) => {
    dispatch(removeCategory(cat));
  };

  return (
    <div className="CategoryTabContainer">
      <div className="CategoryName">{cat.name}</div>
      <button onClick={() => handleRemove(cat)} className="CategoryRemove">
        x
      </button>
    </div>
  );
};

export default CategoryTab;
