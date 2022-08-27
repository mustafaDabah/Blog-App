import React from 'react';
import { SinglePostMemo } from '../SinglePost/SinglePost';

function PostsList({ posts }) {
  console.log('postlist', posts);

  if (!posts.length) return <div className="text-center text-white capitalize p-4">please search again with new good words </div>;

  const postsContents = posts?.map((post) => <SinglePostMemo post={post} key={post.id} />);
  return (
    <div>
      {postsContents}
    </div>
  );
}

export default PostsList;
