import React from 'react';
import { useFitness } from '../contexts/FitnessContext';

const NavBar: React.FC = () => {
  const { data } = useFitness();

  const handleDarkMode = () => {
    alert('Dark mode feature coming soon!');
  };

  return (
    <nav>
      <div className="logo">Fitness Tracker</div>
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
      <div className="nav-user-info">
        <span>Hello, {data.userName}</span>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </div>
    </nav>
  );
};

export default NavBar;
