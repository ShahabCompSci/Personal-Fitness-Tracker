import React, { useState } from 'react';
import { useFitness } from '../contexts/FitnessContext';

const NutritionLog: React.FC = () => {
  const { data, updateData } = useFitness();
  const [calories, setCalories] = useState('');

  const handleLogMeal = () => {
    const cals = parseInt(calories) || 0;
    updateData({ calories: data.calories + cals });
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
