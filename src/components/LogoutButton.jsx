import {useState, useContext} from 'react';
import { UserContext } from "../utils/contexts/UserContext";
import { useNavigate } from 'react-router-dom';

export function LogoutButton() {
    const [logoutStatus] = useState(null);
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogout = async () => {
        try{
        const response = await fetch('http://localhost:3000/api/user/logout', {
            method: "POST",
            headers: {
                'Content-type':'application/json'
            },
            credentials: 'include',
        });
        if(response.ok) {
            console.log('Logout successful');
            setUserData(currentState => ({
                ...currentState,
                isAuthenticated: false,
              }));
            navigate('/')
            

        }else{
            console.log('Logout failed');
        }
        }catch (error) {
        console.error('Error', error);
        console.log('Error');
        }
    };

return (
    <div>
        <button onClick={handleLogout}>Logout</button>
        {logoutStatus && <p>{logoutStatus}</p>}
    </div>
    );

}
