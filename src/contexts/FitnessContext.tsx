import React, { createContext, useState, useContext, ReactNode } from 'react';

type FitnessData = {
  userName: string;
  workouts: number;
  calories: number;
  waterIntake: number;
  currentWeight: number;
  goalWeight?: number;
};

type FitnessContextType = {
  data: FitnessData;
  updateData: (updates: Partial<FitnessData>) => void;
};

const defaultData: FitnessData = {
  userName: 'Guest',
  workouts: 0,
  calories: 0,
  waterIntake: 0,
  currentWeight: 80,
  goalWeight: 70,
};

const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (!context) throw new Error('useFitness must be used within a FitnessProvider');
  return context;
};

export const FitnessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FitnessData>(defaultData);

  const updateData = (updates: Partial<FitnessData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <FitnessContext.Provider value={{ data, updateData }}>
      {children}
    </FitnessContext.Provider>
  );
};
