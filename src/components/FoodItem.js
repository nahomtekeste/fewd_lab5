import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaStar } from "react-icons/fa";

const FoodItem = ({ food, onToggleInterest, onUpdateRating }) => {
  if (!food) {
    return <div>Food item not available</div>;
  }

  const handleInterestClick = () => {
    if (onToggleInterest && typeof onToggleInterest === "function") {
      onToggleInterest(food.id);
    }
  };

  const handleStarClick = (newRating) => {
    if (onUpdateRating && typeof onUpdateRating === "function" && newRating >= 0 && newRating <= 5) {
      onUpdateRating(food.id, newRating);  // This updates the rating in Home.js
    }
  };

  const {
    name = "Unknown Item",
    description = "No description available.",
    speakerRating = 0,  // Default rating if not defined
    potentialInterest = false,
    speaker = "Unknown Speaker",  // Default speaker name if not provided
  } = food;

  // Ensure rating is within valid range (0-5)
  const validatedRating = Math.min(Math.max(speakerRating, 0), 5);

  return (
    <Accordion>
      <Accordion.Item eventKey={food.id || "unknown"}>
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>
          <p>{description}</p>

        
          {/* Display speaker's name above the "Mark as Interested" button */}
          <div className="speaker-name">
            <strong>Speaker: </strong>{speaker}
          </div>
      <br></br>
          <div className="interest-button">
            <button onClick={handleInterestClick}>
              {potentialInterest ? "Unmark Interest" : "Mark as Interested"}
            </button>
          </div>

          <br></br>
          {/* Display speaker rating as clickable stars */}
          <div className="speaker-rating">
            <span>Rating:</span>
            {[...Array(5)].map((_, index) => {
              const starRating = index + 1; // Rating is 1-based
              return (
                <FaStar
                  key={index}
                  className="star-icon"
                  color={index < validatedRating ? "#f39c12" : "#e0e0e0"}  // Yellow for active, gray for inactive
                  onClick={() => handleStarClick(starRating)}  // Click triggers updateRating
                  style={{ cursor: "pointer" }}
                />
              );
            })}
            <span> {validatedRating} / 5</span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FoodItem;
