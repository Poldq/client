import React, { useState, useContext} from 'react';
import { UserContext } from '../utils/contexts/UserContext';
export const HabitPlanForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        duration_from: '',
        duration_to: '',
    });

    const { setUserData } = useContext(UserContext);
  
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:3000/api/habitPlan/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Habit plan created:', data);
            }
            setUserData(currentState => ({
                ...currentState,
                hasHabitPlan: true,
            }));

        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="duration_from">Duration From</label>
                <input
                    type="date"
                    id="duration_from"
                    name="duration_from"
                    value={formData.duration_from}
                    onChange={handleChange}
                />
                <label htmlFor="duration_to">Duration To</label>
                <input
                    type="date"
                    id="duration_to"
                    name="duration_to"
                    value={formData.duration_to}
                    onChange={handleChange}
                />
                <button type="submit">Create Habit Plan</button>
            </form>
        </div>
    );
};
