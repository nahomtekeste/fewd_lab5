import React from "react";
import { Link, Outlet } from "react-router-dom";

const People = ({staff}) => {
  return (
    <div className="container-fluid">
      <h2>Meet our Staff</h2>
      <p>We are proud of our incredibly talented and dedicated team</p>
      <ul className="list-group">
        {staff.map((person) => (
          <li className="list-group-item" key={person.id}>
            <Link to={person.id}>{person.fullName}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default People;