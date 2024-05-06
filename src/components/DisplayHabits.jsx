import { DeleteHabit } from "./DeleteHabit";
import { StreakButton } from "./StreakButton";

export const DisplayedHabits = ({ habits }) => {
    return (
        <div>
            {habits && habits.length > 0 ? (
                <div>
                    {habits.map((habit, index) => (
                        <div key={index} className="habit-row">
                            <div>
                                <strong>Name:</strong> {habit.name}
                            </div>
                            <div>
                                <strong>Description:</strong> {habit.description}
                            </div>
                            <div>
                                <strong>Status:</strong> {habit.status}
                            </div>
                            <div>
                                <strong>Streak:</strong> {habit.streak}
                            </div>
                            <StreakButton habitID={habit._id} />
                            <DeleteHabit habitID={habit._id} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No habits to display</div>
            )}
        </div>
    );
};
