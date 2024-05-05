import React, { useState, useEffect } from 'react';
import './App.css';
import { UserContext } from './utils/contexts/UserContext';
import { HabitPlanContext } from './utils/contexts/HabitPlanContext'; // Import HabitPlanContext
import { MainPage } from './components/MainPage';
import { Outlet } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData 
      ? JSON.parse(storedUserData) 
      : { id: 0, login: "", display_name: "", isAuthenticated: false, hasHabitPlan: false };
  });

  const [habitPlanData, setHabitPlanData] = useState(() => {
    const storedHabitPlanData = localStorage.getItem('habitPlanData');
    return storedHabitPlanData
      ? JSON.parse(storedHabitPlanData) 
      : { name: "", duration_from: "", duration_to: "" };
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('habitPlanData', JSON.stringify(habitPlanData));
  }, [habitPlanData]);

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      <HabitPlanContext.Provider value={{ ...habitPlanData, setHabitPlanData }}> {/* Provide HabitPlanContext */}
        <div>
          <Outlet />
        </div>
      </HabitPlanContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
