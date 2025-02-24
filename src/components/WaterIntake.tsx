import React from 'react';
import { useFitness } from '../contexts/FitnessContext';

const WaterIntake: React.FC = () => {
  const { data, updateData } = useFitness();

  const logWater = () => {
    updateData({ waterIntake: data.waterIntake + 0.25 });
  };

  return (
    <div className="card">
      <h2>Water Intake</h2>
      <button onClick={logWater}>Add 250ml</button>
    </div>
  );
};

export default WaterIntake;
