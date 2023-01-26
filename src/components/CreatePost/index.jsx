import { useState, useContext } from 'react';
import { PostContext } from '../App';
import './CreatePost.css';

function CreatePost({ user }) {
  const { dispatch } = useContext(PostContext)
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const post = {
      content,
      image,
      user,
      id: Date.now(),
    }
    dispatch({ type: "ADD_POST", payload: { post }})
    setContent("")
    setImage(null)
  }

  return (
    <div className="createPost">
      <h1 className="createPost__title">Create New Post</h1>
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
        <div className="post__button-wrapper">
          <button
            className="createPost__button--submit"
            type="submit"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
