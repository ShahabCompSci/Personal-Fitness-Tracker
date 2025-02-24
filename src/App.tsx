import React from 'react';
import { FitnessProvider } from './contexts/FitnessContext';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <FitnessProvider>
      <NavBar />
      <Dashboard />
      <Profile />
    </FitnessProvider>
  );
};

export default App;
