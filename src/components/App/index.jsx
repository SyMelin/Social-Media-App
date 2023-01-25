import React, { useState, useEffect, useCallback } from 'react'
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

  //hook
  const handleAddPost = useCallback((newPost) => {
    setPosts([newPost, ...posts])
  }, [posts])

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
        handleAddPost={handleAddPost}
      />
      <PostList
        posts={posts}
      />
    </div>
  )
}

export default App
