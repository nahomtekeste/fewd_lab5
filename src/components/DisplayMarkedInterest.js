import React, { useEffect, useState } from "react";

const DisplayMarkedInterest = () => {
  const [markedItems, setMarkedItems] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("foodList");
    if (storedList) {
      const interestedItems = JSON.parse(storedList).filter(
        (item) => item.potentialInterest
      );
      setMarkedItems(interestedItems);
    }
  }, []);

  return (
    <div>
      <h3>Talks Marked as Interested</h3>
      {markedItems.length > 0 ? (
        markedItems.map((item) => (
          <div key={item.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Speaker: {item.speaker}</p>
          </div>
        ))
      ) : (
        <p>No talks marked as interested yet.</p>
      )}
    </div>
  );
};

export default DisplayMarkedInterest;
