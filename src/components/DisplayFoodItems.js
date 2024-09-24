import React from "react";
import DisplayMenuCategory from "./DisplayMenuCategory";

const DisplayFoodItems = ({ foodList }) => {
  const main = foodList.filter((entry) => entry.category === "main");
  const pudding = foodList.filter((entry) => entry.category === "pudding");
  const cake = foodList.filter((entry) => entry.category === "cake");
  const drinks = foodList.filter((entry) => entry.category === "drinks");
  const side = foodList.filter((entry) => entry.category === "side");
  const snack = foodList.filter((entry) => entry.category === "snack");

  const categories = [snack,main,side,pudding,cake,drinks ];

  return (
    <>
      {categories.map((item) => (
        <div>
          <hr/>
        <DisplayMenuCategory foodList={item} />
        </div>
      ))}
    </>
  );
};

export default DisplayFoodItems;
