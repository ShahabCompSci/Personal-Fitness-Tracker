import React, { useState } from 'react';
import { useFitness } from '../contexts/FitnessContext';

const Profile: React.FC = () => {
  const { data, updateData } = useFitness();
  const [userName, setUserName] = useState(data.userName);
  const [goalWeight, setGoalWeight] = useState<number>(data.goalWeight || 70);

  const handleSaveProfile = () => {
    updateData({ userName, goalWeight });
    alert('Profile updated successfully!');
  };

  return (
    <section className="container" id="profile">
      <h1>Your Profile</h1>
      <div className="card">
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="form-label">Goal Weight (kg)</label>
        <input
          type="number"
          placeholder="Enter goal weight..."
          value={goalWeight}
          onChange={(e) => setGoalWeight(Number(e.target.value))}
        />
        <button onClick={handleSaveProfile}>Save Profile</button>
      </div>
    </section>
  );
};

export default Profile;
