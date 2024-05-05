
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';
import { HabitPlanContext } from '../utils/contexts/HabitPlanContext';
import { DeleteHabitPlan } from './DeleteHabitPlan';
import { Habit } from './CreateHabit';
import { DisplayedHabits } from './DisplayHabits';
import {DeleteHabit} from './DeleteHabit';
import '../styles/HabitPlanDetails.css';


export const HabitPlanDetails = () => {
    const habitPlanContextData = useContext(HabitPlanContext);
    const userContextData = useContext(UserContext);
    const [habitPlan, setHabitPlan] = useState({});
    const [habits, setHabits] = useState([]);
    const [error, setError] = useState('');
    const [refreshHabits, setRefreshHabits] = useState(false);

    useEffect(() => {
        const fetchHabitPlan = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/habitPlan/', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setHabitPlan(data.habitPlan);
                    setHabits(data.habits);
                } else {
                    userContextData.setUserData((currentState) => ({
                        ...currentState,
                        hasHabitPlan: true,
                    }));
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchHabitPlan();
    }, [refreshHabits]); 

    const createHabit = async (habitData) => {
        try {
            const response = await fetch('http://localhost:3000/api/habitPlan/habits/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ ...habitData, habitPlanId: habitPlan._id }), 
            });

            if (response.ok) {
                setRefreshHabits((prev) => !prev);
                console.log('Habit created successfully');
            } else {
                console.error('Failed to create habit');
            }
        } catch (error) {
            console.error('Error creating habit:', error);
        }
    };

    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="habitPlanContainer">
            <h2></h2>
            {habitPlan && (
                <div>
                    <ul>
                        <li>
                            <p>{habitPlan.name}</p>
                        </li>
                        <li>
                            <p>{formatDate(habitPlan.duration_from)}</p>
                        </li>
                        <li>
                            <p>{formatDate(habitPlan.duration_to)}</p>
                        </li>
                        <li>
                            <DeleteHabitPlan />
                        </li>
                        <li>
                            <Habit onCreate={createHabit} /> 
                        </li>
                        <li>
                            <DisplayedHabits habits={habits} />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};


