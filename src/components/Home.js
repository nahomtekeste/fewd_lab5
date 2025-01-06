import React, { useState, useRef } from "react";
import Search from "./Search";
import NavigationAlt from "./NavigationAlt";
import FoodItem from "./FoodItem"; // Import the FoodItem component
import { items as initialItems } from "../data/data";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState(initialItems); // State for items
  const [filteredItems, setFilteredItems] = useState(initialItems); // State for filtered items
  const [userSchedule, setUserSchedule] = useState([]); // State to track user's schedule
  const whoWeAreRef = useRef(null);

  // Smooth scrolling function
  const scrollToWhoWeAre = () => {
    whoWeAreRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const conferencesRef = useRef(null);

// Function to scroll to the Upcoming Conferences section
const scrollToConferences = () => {
  conferencesRef.current.scrollIntoView({ behavior: "smooth" });
};


  // Toggle potentialInterest
  const toggleInterest = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, potentialInterest: !item.potentialInterest } : item
      );
      setFilteredItems(updatedItems); // Ensure filteredItems are updated when items change
      return updatedItems; // Return updated items to set in state
    });
  };

  // Update speaker rating
  const updateRating = (id, newRating) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, speakerRating: newRating } : item
      );
      setFilteredItems(updatedItems); // Ensure filteredItems are updated when items change
      return updatedItems; // Return updated items to set in state
    });
  };

  // Handle search result update
  const handleSearchUpdate = (filtered) => {
    setFilteredItems(filtered); // Update filteredItems when search results change
  };

  // Upcoming conferences data (with specific times for talks)
  const conferences = [
    {
      name: "React Summit 2024",
      date: "March 12, 2024",
      location: "New York, USA",
      time: "10:00 AM",
    },
    {
      name: "JavaScript World 2024",
      date: "April 20, 2024",
      location: "London, UK",
      time: "11:00 AM",
    },
    {
      name: "Frontend Connect 2024",
      date: "May 5, 2024",
      location: "Berlin, Germany",
      time: "12:00 PM",
    },
  ];

  // Function to handle adding talks to the schedule
  const addToSchedule = (talk) => {
    // Check if the talk is already in the schedule
    const isConflicting = userSchedule.some(
      (scheduledTalk) => scheduledTalk.time === talk.time
    );

    if (isConflicting) {
      alert("You already have a talk scheduled at this time.");
    } else {
      setUserSchedule((prevSchedule) => [...prevSchedule, talk]);
    }
  };

  return (
    <div className="home-container">
      <NavigationAlt scrollToWhoWeAre={scrollToWhoWeAre} />
      {/* Banner Section */}
      <div className="banner">
        <h1>Welcome to TechCon</h1>
        <p>Where Technology and Innovation Meet</p>
      </div>

      {/* Who We Are Section */}
      <div ref={whoWeAreRef} className="content">
        <div className="row">
          <div className="col">
            <h3>Who We Are...</h3>
            <p>
              Welcome to TechCon, your gateway to the most engaging and innovative technology conferences!
              Our mission is to connect developers, engineers, and tech enthusiasts from around the world.
            </p>
            <p>
              At our conferences, you'll find a vibrant community of like-minded individuals who are as passionate
              about technology as you are. Whether you're here to learn, network, or showcase your expertise,
              TechCon provides the perfect environment for growth and collaboration.
            </p>
            <p>
              Join us as we explore the latest trends and push the boundaries of what's possible in technology.
              We're excited to have you with us for this journey into the future!
            </p>
            {/* Add an image or design below */}
            <img src="\whoweare.jpg" alt="Tech Conference" className="who-we-are-image" />
          </div>

          {/* Explore Our Speakers and All Talks Section */}
          <div className="col">
            <div className="explore-speakers">
              <h3>Explore Our Speakers...</h3>
              <Search details={items} onSearchUpdate={handleSearchUpdate} />
            </div>
            <br />
            <div className="speaker-ratings">
              <h3>All Talks</h3>
              <div>
                {filteredItems.map((item) => (
                  <FoodItem
                    key={item.id}
                    food={item}
                    onToggleInterest={toggleInterest}
                    onUpdateRating={updateRating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="separator-line" />

        {/* Create a horizontal layout for Upcoming Conferences and Your Schedule */}
        <div className="side-by-side">
          {/* Your Schedule Section */}
          

          {/* Upcoming Conferences Section */}
          <div ref={conferencesRef} className="conferences-section">
  <h3>Upcoming Conferences</h3>
  <ul>
    {conferences.map((conference, index) => (
      <li key={index}>
        <strong>{conference.name}</strong> <br />
        Date: {conference.date} <br />
        Location: {conference.location} <br />
        Time: {conference.time} <br />
        <button onClick={() => addToSchedule(conference)}>
          Add to My Schedule
        </button>
      </li>
    ))}
  </ul>
</div>


          <div className="schedule-section">
            <h3>Your Schedule</h3>
            {userSchedule.length > 0 ? (
              <ul>
                {userSchedule.map((talk, idx) => (
                  <li key={idx}>
                    <strong>{talk.name}</strong> <br />
                    Date: {talk.date} <br />
                    Time: {talk.time} <br />
                    Location: {talk.location}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No talks scheduled yet.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
