export const DisplayedHabits = ({ habits }) => {
    return (
        <div>
            {habits && habits.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habits.map((habit, index) => (
                            <tr key={index}>
                                <td>{habit.name}</td>
                                <td>{habit.description}</td>
                                <td>{habit.status}</td>
                                <td>{habit.streak}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
        ) : (
                <div>No habits to display</div>
            )}
        </div>
    );
};