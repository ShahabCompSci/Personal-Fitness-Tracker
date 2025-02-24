import React from 'react';
import { useFitness } from '../contexts/FitnessContext';
import WorkoutLog from './WorkoutLog';
import NutritionLog from './NutritionLog';
import WaterIntake from './WaterIntake';
import ProgressChart from './ProgressChart';

const Dashboard: React.FC = () => {
  const { data } = useFitness();

  return (
    <section className="container" id="dashboard">
      <h1>Welcome, {data.userName}!</h1>
      <div className="grid">
        <WorkoutLog />
        <NutritionLog />
        <WaterIntake />
        <ProgressChart />
      </div>
      <div className="card highlight">
        <h2>Your Progress</h2>
        <p>Workouts Completed: {data.workouts}</p>
        <p>Calories Consumed: {data.calories} kcal</p>
        <p>Water Intake: {data.waterIntake} L</p>
        <p>Current Weight: {data.currentWeight} kg</p>
        <p>Goal Weight: {data.goalWeight} kg</p>
      </div>
    </section>
  );
};

export default Dashboard;
