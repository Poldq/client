import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/contexts/UserContext";

export function LoginForm() {
    const navigate = useNavigate(); 
    const { setUserData } = useContext(UserContext);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
  
      const login = formData.get("login");
      const password = formData.get("password");
      try {
        const response = await fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            login,
            password
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("data", data)
          console.log("data.login", data.login)
          setUserData(currentState => ({
            ...currentState,
            id: data.user._id,
            login: data.user.login,
            display_name: data.user.display_name,
            isAuthenticated: true,
          }));
          console.log("Login successful, navigating to the main page");
          navigate("/");
        } else {
          setError("Bad credentials");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while logging in");
      }
    };
  
    return (
      <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <br />
        <input id="login" name="login" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input id="password" type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }
  
  


