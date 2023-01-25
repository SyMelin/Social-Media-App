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
      <h2 className="login__title">Login</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit}>
        <input
          className="login__form-input"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input username"
        />
        <button
          className="login__button--submit"
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

export default Login
