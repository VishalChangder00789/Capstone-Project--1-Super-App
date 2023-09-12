import React, { useEffect, useState } from "react";
import "./page2.css";
import { useSelector } from "react-redux";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import CategoryTile from "../../components/CategoryTile/CategoryTile";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const categories = useSelector((state) => state.categories);
  const categoryChoices = useSelector((state) => state.categoryChoices);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNextPage = () => {
    // check if the error is gone or not
    if (!error) {
      navigate("/profile");
    }
  };

  useEffect(() => {
    if (categories.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  });

  return (
    <div className="Page2">
      <div className="LeftPanel_Page2">
        <div className="Heading_Page2">Super app</div>
        <div className="subHeading_Page2">
          Choose your entertainment category
        </div>
        <div className="CategoryContainer_Page2">
          {categories.map((cat) => {
            return <CategoryTab cat={cat} />;
          })}
        </div>
        <div className="ErrorPlace">
          {error ? (
            <>
              <span>&#9888;</span> Minimum 3 category Required
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="RightPanel_Page2">
        <div className="RightPanel_Page2_Container">
          {categoryChoices.map((category) => {
            return (
              <CategoryTile
                name={category.name}
                img={category.img}
                color={category.color}
                id={category.id}
              />
            );
          })}
        </div>
        <div className="RightPanel_Page2_ButtonContainer">
          <button onClick={handleNextPage} className="RightPanel_Page2_Button">
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
