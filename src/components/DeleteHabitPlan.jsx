import React, {useContext} from "react";
import { UserContext } from "../utils/contexts/UserContext";

export function DeleteHabitPlan() {

    const { setUserData } = useContext(UserContext);

    const handleDelete = async (e) => {
        try{
            const response = await fetch('http://localhost:3000/api/habitPlan/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
        
            });
            if (response.ok) {
                const data = await response.json();
                setUserData(currentState => ({
                    ...currentState,
                    hasHabitPlan: false,
                  }));
                console.log("Successfully deleted");

            }

            else if (response.status === 401) {
                setUserData((currentState) => ({
                    ...currentState,
                    isAuthenticated: false
                }))
            }
        }catch (err) {
            console.log("Deletion failed", "error");
        }
    };
return (
   
        <button onClick={handleDelete}>Delete Habit Plan</button>
    );
};
