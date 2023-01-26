import React, { useState, useEffect, createContext, useContext, useReducer } from 'react'
import postReducer from '../../reducer'
import Login from '../Login'
import Header from '../Header'
import CreatePost from '../CreatePost'
import PostList from '../PostList'
import './App.css'

export const UserContext = createContext('reed')
export const PostContext = createContext({
  posts: []
})

function App() {
  const initialPostState = useContext(PostContext)
  const [state, dispatch] = useReducer(postReducer, initialPostState)
  const [user, setUser] = useState('')

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please login';
  }, [user])

  if (!user) {
    return <Login setUser={setUser} />
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <div className="App">
          <Header
            user={user}
            setUser={setUser}
          />
          <CreatePost
            user={user}
          />
          <PostList
            posts={state.posts}
          />
        </div>
      </UserContext.Provider>
    </PostContext.Provider>
  )
}

export default App
