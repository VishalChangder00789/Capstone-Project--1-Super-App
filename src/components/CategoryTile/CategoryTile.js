import React from "react";
import "./CategoryTile.css";
import { addCategories } from "../../store/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryTile = ({ name, img, color, id }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);

  const handleAddCategoryEvent = (name, id) => {
    // if the category is not present then only add to state
    if (!category.includes(name)) {
      dispatch(addCategories({ name, id }));
    }

    return;
  };

  return (
    <div
      onClick={() => handleAddCategoryEvent(name, id)}
      className="CategoryTile"
      style={{ background: `${color}` }}
    >
      <div className="CategoryHeading">{name}</div>
      <img className="CategoryImage" src={img} />
    </div>
  );
};

export default CategoryTile;
