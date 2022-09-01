import React from 'react';
import Collapse from '../Collapse/Collapse';
import { CommentListMemo } from '../CommentList/CommentList';

function SinglePost({ post }) {
  return (
    <div className="bg-white rounded-lg p-3 mb-3">
      <h2 className="font-bold uppercase text-md border-b-2 pb-2 text-sm md:text-md">{post.title}</h2>
      <h2 className="font-normal text-sm mt-3 mb-3">{post.body}</h2>
      <Collapse title="user commit" defaultExpanded={false}>
        <CommentListMemo postId={post.id} />
      </Collapse>
    </div>
  );
}

export default SinglePost;
export const SinglePostMemo = React.memo(SinglePost);
