import React, { useState } from "react";
import "./home.css";
import { FaHome, FaMedal, FaEnvelope, FaGamepad, FaCog, FaCrown, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <ul className="menu">
        <li>
          <FaHome />
          <span className="home">Home</span>
        </li>
        <li>
          <FaMedal />
          <span className="achievments">Achievements</span>
        </li>
        <li>
          <FaEnvelope />
          <span className="message">Messages</span>
        </li>
        <li>
          <FaGamepad />
          <span className="games">Games</span>
        </li>
        <li>
          <FaCog />
          <span className="settings">Settings</span>
        </li>
        <li>
          <FaCrown />
          <span className="rank">Rank</span>
        </li>
        <li>
          <FaSignOutAlt />
          <span className="logout">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
