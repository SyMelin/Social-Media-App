import { useContext } from 'react';
import { UserContext, PostContext } from '../App'
import './Post.css'

function Post({ post }) {
  const currentUser = useContext(UserContext)
  const { dispatch } = useContext(PostContext)
  const isCurrentUser = currentUser === post.user

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id: post.id } })
  }

  return (
    <div className="post">
      {post.image && (
        <img
          className="post__image"
          style={{ width: 200, height: 100, objectFit:"cover"}}
          src={URL.createObjectURL(post.image)}
          alt="Post cover"
        />
      )}
      <p className="post__content">{post.content}</p>
      <div
        className="post__user"
        style={{ color: isCurrentUser && 'green'}}
      >
        {post.user}
      </div>
      { isCurrentUser &&
          <button
            className="post__button--delete"
            type="button"
            onClick={handleDeletePost}
          >
            Delete
          </button>
      }
    </div>
  )
}

export default Post
