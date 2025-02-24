import React from 'react';
import { FitnessProvider } from './contexts/FitnessContext';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <FitnessProvider>
      <Dashboard />
    </FitnessProvider>
  );
};

export default App;
