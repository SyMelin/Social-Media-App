import Post from '../Post';
import './PostList.css';

function PostList({ posts}) {

  return (
    <div className="postList">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;
