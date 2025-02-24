import React from 'react';
import { useFitness } from '../contexts/FitnessContext';
import WorkoutLog from './WorkoutLog';
import NutritionLog from './NutritionLog';
import WaterIntake from './WaterIntake';
import ProgressChart from './ProgressChart';

const Dashboard: React.FC = () => {
  const { data } = useFitness();

  return (
    <div className="container">
      <h1>Personal Fitness Tracker</h1>
      <div className="grid">
        <WorkoutLog />
        <NutritionLog />
        <WaterIntake />
        <ProgressChart />
      </div>
      <div className="card">
        <h2>Your Progress</h2>
        <p>Workouts Completed: {data.workouts}</p>
        <p>Calories Consumed: {data.calories} kcal</p>
        <p>Water Intake: {data.waterIntake} L</p>
        <p>Current Weight: {data.weight} kg</p>
      </div>
    </div>
  );
};

export default Dashboard;
