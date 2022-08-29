import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, selectAllComments, selectCommentsByPost } from '../../store/features/comments/commentsSlice';
import { SingleCommentMemo } from '../SingleComment/SingleComment';

function CommentList({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => selectCommentsByPost(state, postId));
  // const comments = useSelector(selectAllComments);

  const fetchTheComments = useCallback(() => {
    dispatch(fetchComments({ id: postId }));
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(fetchComments({ id: postId }));
  }, [dispatch, postId]);

  const commentsContent = comments?.map((comment) => <SingleCommentMemo comment={comment} key={comment.id} />);

  console.log('comment list');

  return (
    <div>
      {commentsContent}
    </div>
  );
}

export default CommentList;
export const CommentListMemo = React.memo(CommentList);
