import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem"; // Assuming you have this component to render individual food items

const DisplayMenuCategory = ({ foodList }) => {
  const [updatedFoodList, setUpdatedFoodList] = useState([]);

  // Initialize from foodList or localStorage
  useEffect(() => {
    const storedList = localStorage.getItem("foodList");
    if (storedList) {
      setUpdatedFoodList(JSON.parse(storedList));
    } else {
      setUpdatedFoodList(foodList);
    }
  }, [foodList]);

  const toggleInterest = (id) => {
    const updatedList = updatedFoodList.map((food) =>
      food.id === id
        ? { ...food, potentialInterest: !food.potentialInterest }
        : food
    );

    // Save updated list to localStorage
    localStorage.setItem("foodList", JSON.stringify(updatedList));
    setUpdatedFoodList(updatedList);
  };

  return (
    <Accordion>
      {updatedFoodList.map((food, index) => (
        <Accordion.Item eventKey={index} key={food.id}>
          <FoodItem food={food} onToggleInterest={toggleInterest} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default DisplayMenuCategory;
