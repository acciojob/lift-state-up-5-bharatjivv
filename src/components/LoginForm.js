import React, {useState} from 'react'

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlSubmit = (e) => {
        e.preventDefault();
        if(username && password) {
            onLogin();
        }
    }

  return (
    <div>
        <form onSubmit={handlSubmit}>
            <h2>Login Form</h2>
            <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm