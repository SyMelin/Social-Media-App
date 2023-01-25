import React, { useState, useEffect } from 'react'
import Login from '../Login'
import Header from '../Header'
import CreatePost from '../CreatePost'
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
      {posts.map((post, index) => (
        <React.Fragment
          key={`post-${user}--${index}`}
        >
          {post.image && (
              <img
                style={{ width: 200, height: 100, objectFit:"cover"}}
                src={URL.createObjectURL(post.image)}
                alt="Post cover"
              />
          )}
          <p>{post.content}</p>
          <div>{user}</div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App
