export function DeleteHabit({habitID}) {

const handleDelete = async (event) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/habitPlan/habits/${habitID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Deletion success. Refresh page", "success");
      }
      
    } catch (err) {
      console.log("Deletion failed", "error");
    }
  };

return (
    <div>
        <button onClick={handleDelete}>Delete Habit</button>
    </div>
)

};