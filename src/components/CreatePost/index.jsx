import { useState, useRef } from 'react';
import './CreatePost.css';

function CreatePost({ user, posts, setPosts }) {
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const post = {
      content,
      image,
      user,
    }
    const newPosts = [post, ...posts]
    setPosts(newPosts)
    setContent("")
    setImage(null)
  }

  return (
    <div className="createPost">
      <h1 className="createPost__title">Create New Form</h1>
      <form
        className="createPost__form"
        onSubmit={handleSubmit}
      >
        <input
          className="createPost__form-input"
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input
          className="createPost__form-input"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          className="createPost__button--submit"
          type="submit"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
