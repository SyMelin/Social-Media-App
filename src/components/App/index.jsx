import React, { useState, useEffect, useCallback, createContext } from 'react'
import Login from '../Login'
import Header from '../Header'
import CreatePost from '../CreatePost'
import PostList from '../PostList'
import './App.css'

export const UserContext = createContext()

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
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  )
}

export default App
