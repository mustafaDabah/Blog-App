import React from 'react';
import Collapse from '../Collapse/Collapse';
import CommentList from '../CommentList/CommentList';

function SinglePost({ post }) {
  console.log('single post');
  return (
    <div className="bg-white rounded-lg p-3 mb-3">
      <h2 className="font-bold uppercase text-md border-b-2 pb-2 ">{post.title}</h2>
      <h2 className="font-normal text-sm mt-3  mb-3">{post.body}</h2>
      <Collapse title="user commit" defaultExpanded={false}>
        <CommentList postId={post.id} />
      </Collapse>
    </div>
  );
}

export default SinglePost;
export const SinglePostMemo = React.memo(SinglePost);
