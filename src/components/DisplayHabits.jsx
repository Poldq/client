import { DeleteHabit } from "./DeleteHabit";
import { StreakButton } from "./StreakButton";


export const DisplayedHabits = ({ habits }) => {
    return (
<div className="habitsContainer">
            {habits && habits.length > 0 ? (
                habits.map((habit, index) => (
                    <div key={index} className="habit-item">
                        <div>
                            <strong>Name:</strong> {habit.name}
                        </div>
                        <div>
                            <strong>Status:</strong> {habit.status}
                        </div >
                        <StreakButton habitID={habit._id} />
                        <DeleteHabit habitID={habit._id} />
                    </div>
                ))
            ) : (
                <div>No habits to display</div>
            )}
        </div>
    );
};