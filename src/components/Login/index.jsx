import { useState } from 'react'
import './Login.css'

function Login({ setUser }) {
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setUser(username)
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login
