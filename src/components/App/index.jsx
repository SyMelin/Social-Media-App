import React, { useState, useEffect } from 'react'
import Login from '../Login'
import Header from '../Header'
import CreatePost from '../CreatePost'
import PostList from '../PostList'
import './App.css'

function App() {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState([])

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
      <CreatePost
        user={user}
        posts={posts}
        setPosts={setPosts}
      />
      <PostList
        posts={posts}
      />
    </div>
  )
}

export default App
