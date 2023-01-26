import Post from '../Post';
import './PostList.css';

function PostList({ posts}) {

  return (
    <div className="postList">
      {posts.map((post, index) => (
        <Post
          key={`post-${post.user}--${index}`}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;
