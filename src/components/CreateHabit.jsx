import React, { useState, useContext } from 'react';

export const Habit = (props) => {
    const [formFields, setFormFields] = useState({
        name: '',
        description: '',
        status: '',
    });

    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(false); 

    const validateForm = () => {
        let errors = {};

        if (!formFields.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formFields.status.trim()) {
            errors.status = 'Status is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:3000/api/habitPlan/habits/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(formFields),
                });
                if (response.ok) {
                    console.log('Habit successfully created');
                    props.refreshHabits();
                } else {
                    console.error('Habit creation failed');
                }
            } catch (error) {
                console.error('Error((', error);
            }
        }
    };

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Create Habit</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formFields.name} onChange={handleChange} />
                        {errors.name && <span>{errors.name}</span>}
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={formFields.description} onChange={handleChange} />
                    </label>
                    <label>
                        Status:
                        <select name="status" value={formFields.status} onChange={handleChange}>
                            <option value="">Select status</option>
                            <option value="develop">Develop</option>
                            <option value="quit">Quit</option>
                        </select>
                        {errors.status && <span>{errors.status}</span>}
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};
