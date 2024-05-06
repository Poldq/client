export function StreakButton({habitID}) {
    
    const handlestreak = async () => {
        try{
        const response = await fetch(`http://localhost:3000/api/habitPlan/habits/${habitID}/done`, {
            method: "POST",
            headers: {
                'Content-type':'application/json'
            },
            credentials: 'include',
        });
        
        if(response.ok) {
            console.log("Streak updated");
        }
        
        if(response.status == 422) {
            console.log("Streak already been updated");


        }
        }catch (error) {
        console.error('Error', error);
        console.log('Error');
        }
    };

return (
    <div>
        <button onClick={handlestreak}>Done</button>
    </div>
    );

};