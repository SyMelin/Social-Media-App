import { UserContext } from '../App'
import './Post.css'

function Post({ post }) {

  return (
    <UserContext.Consumer>
      {currentUser => (
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
              style={{ color: currentUser === post.user && 'green'}}
            >{post.user}</div>
      </div>
      )}
      
    </UserContext.Consumer>
  );
}

export default Post
