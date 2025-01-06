import React from "react";

function Events() {
  // Array of upcoming conferences
  const conferences = [
    { name: "React Summit 2024", date: "March 12, 2024", location: "New York, USA" },
    { name: "JavaScript World 2024", date: "April 20, 2024", location: "London, UK" },
    { name: "Frontend Connect 2024", date: "May 5, 2024", location: "Berlin, Germany" },
    { name: "Web Dev Conference 2024", date: "June 15, 2024", location: "Tokyo, Japan" },
    { name: "Frontend Connect 2024", date: "May 5, 2024", location: "Berlin, Germany" },
    { name: "JavaScript World 2024", date: "April 20, 2024", location: "London, UK" },

    

  ];

  return (
    <div>
      <h2></h2>
      <br></br>

      <ul>
        {conferences.map((conference, index) => (
          <li key={index}>
            <strong>{conference.name}</strong> <br />
            Date: {conference.date} <br />
            Location: {conference.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
