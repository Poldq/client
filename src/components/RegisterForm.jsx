import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterForm() {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState({
        login: "",
        display_name: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
    
    if (!formFields.login.trim()) {
        errors.login = 'Login is required';
    }else if (formFields.login.length < 6 || formFields.login.length > 32){
        errors.login = "Login must be between 6 and 32 characters";
    }

    if(!formFields.display_name.trim()) {
        errors.display_name = "Display Name is required";
    }

    if(!formFields.password.trim()){
        errors.password = "Password is required";
    }else if (formFields.password.length < 8 || formFields.password.length > 32) {
        errors.password = "Password must be between 8 and 32 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
};
    const handleSubmit = async (e) => {
        e.preventDefault();
    
if (validateForm()) {
    try {
        const response = await fetch('http://localhost:3000/api/user/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formFields),
        });
        if (response.ok) {
            console.log('Registartion successful');
            navigate('/login')
        }else{
            const data = await response.json();
        if (response.status === 422) {
                setErrors({ accountExists: 'An account with this login already exists.' });
        }else{
            console.error('Registration failed');
        }
    }
    }catch (error) {
        console.error('Error((', error);
        }
    
};
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="login">Login</label>
        <input 
        id="login"
        value={formFields.login}
        onChange={(e)=>{
        setFormFields((currentState) => ({
                 ...currentState,
                 login: e.target.value,
                }));
            }}
        />
        {errors.login && <span className="error">{errors.login}</span>}
        </div>
        <div>
            <label htmlFor="display_name">Display Name</label>
        <input
        id="display_name"
        value={formFields.display_name} 
        onChange={(e)=>{
            setFormFields((currentState) => ({
                ...currentState,
                display_name: e.target.value,
               }));
           }}
        />
        {errors.display_name && <span className="error">{errors.display_name}</span>}
        </div>
        <div>
            <label htmlFor="password">Password</label>
        <input 
        id="password" 
        value={formFields.password} 
        onChange={(e)=>{
            setFormFields((currentState) => ({
                ...currentState,
                password: e.target.value,
               }));
           }}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        </div>
         <button type='submit'> Sign Up</button> 
    </form>
}
