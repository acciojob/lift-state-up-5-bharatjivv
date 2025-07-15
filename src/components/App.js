import React, {useState} from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? (
          <h1>Welcome user, Logged in!</h1>
        ): (<LoginForm onLogin={handleLogin} />

        )}
    </div>
  )
}

export default App
