import React from "react";
import DisplayMenuCategory from "./DisplayMenuCategory"; // Display individual food items by category

const DisplayFoodItems = ({ foodList }) => {
  // Group food items by category dynamically
  const categories = ["Technology", "Business", "AI", "AI", "AI", "AI"];

  const categorizedItems = categories.reduce((acc, category) => {
    acc[category] = foodList.filter((entry) => entry.category === category);
    return acc;
  }, {});

  // Filter talks that are marked as potential interest
  const potentialInterestTalks = foodList.filter((food) => food.potentialInterest === true);

  return (
    <div>
      {/* Marked Interest Section */}
      <h3>Marked as Potential Interest</h3>
      {potentialInterestTalks.length > 0 ? (
        <DisplayMenuCategory foodList={potentialInterestTalks} />
      ) : (
        <p className="conference-details">
          Prof. Alice Johnson <br />
          <strong>Frontend Connect 2024</strong> <br />
          Date: May 5, 2024 <br />
          Location: Berlin, Germany
      </p>

      )}

      {/* Categories Section */}
      {/* <h3>All Talks</h3>
      {categories.map((category, index) => {
        const itemsInCategory = categorizedItems[category];

        return (
          itemsInCategory.length > 0 && (
            <div key={index}>
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}:</h4>
              <DisplayMenuCategory foodList={itemsInCategory} />
            </div>
          )
        );
      })} */}

    </div>
  );
};

export default DisplayFoodItems;
