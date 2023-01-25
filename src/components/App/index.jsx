import { useState, useEffect } from 'react'
import Header from '../Header'
import Login from '../Login'
import './App.css'

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user])

  if (!user) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="App">
      <Header
        user={user}
        setUser={setUser}
      />
    </div>
  )
}

export default App
