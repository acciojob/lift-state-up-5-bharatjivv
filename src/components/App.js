import React, {useState} from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
  }
  
  return (
    <div>
    <h1>Parent Component </h1>
        {/* Do not remove the main div */}
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ): (<LoginForm onLogin={handleLogin} />

        )}
    </div>
  )
}

export default App
