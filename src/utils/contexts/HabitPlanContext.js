import { createContext } from "react";


export const HabitPlanContext = createContext({
    name: "",
    duration_from: "",
    duration_to: "",
    setUserData: () => {},
});