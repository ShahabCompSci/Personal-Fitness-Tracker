import React from 'react';
import { useFitness } from '../contexts/FitnessContext';

const WorkoutLog: React.FC = () => {
  const { updateData } = useFitness();

  const handleWorkout = () => {
    updateData({ workouts: 1 });
  };

  return (
    <div className="card">
      <h2>Workout Tracker</h2>
      <button onClick={handleWorkout}>Log Workout</button>
    </div>
  );
};

export default WorkoutLog;
