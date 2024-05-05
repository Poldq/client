import { createContext } from "react";

export const UserContext = createContext({
    id: 0,
    login: '',
    display_name: '',
    isAuthenticated: false,
    hasHabitPlan: false,
    setUserData: () => {},
});