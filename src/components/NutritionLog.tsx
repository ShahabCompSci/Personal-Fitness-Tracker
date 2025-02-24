import React, { useState } from 'react';
import { useFitness } from '../contexts/FitnessContext';

const NutritionLog: React.FC = () => {
  const { updateData } = useFitness();
  const [calories, setCalories] = useState('');

  const handleLogMeal = () => {
    updateData({ calories: parseInt(calories) || 0 });
    setCalories('');
  };

  return (
    <div className="card">
      <h2>Nutrition Tracker</h2>
      <input
        type="number"
        placeholder="Enter Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={handleLogMeal}>Log Meal</button>
    </div>
  );
};

export default NutritionLog;
