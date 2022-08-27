import React, { useCallback, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Avator from '../../Assets/images/avator.png';
import { deleteComment } from '../../store/features/comments/commentsSlice';
import CommentPopup from '../CommentPopup/CommentPopup';

function SingleComment({ comment }) {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  const closePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

  const deleteSingleComment = () => {
    dispatch(deleteComment(comment));
  };

  console.log('single comment');

  return (
    <>
      {openPopup && (
        <CommentPopup
          closePopup={closePopup}
          comment={comment}
        />
      )}
      <div className="bg-white rounded-md p-4 mb-3 relative">
        <div className="absolute flex right-2 top-4">
          <button
            className="bg-green-300 p-1 rounded-md cursor-pointer tran hover:bg-opacity-[.4] ease-in duration-300 "
            onClick={() => setOpenPopup(true)}
            aria-label="edit"
            type="button"
          >
            <MdModeEdit color="#035803" />
          </button>
          <button
            className="bg-red-300 p-1 rounded-md ml-1 cursor-pointer tran hover:bg-opacity-[.4]  ease-in duration-300"
            onClick={deleteSingleComment}
            aria-label="delete"
            type="button"
          >
            <MdDelete color="#9b1515" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <img src={Avator} alt="" className="w-1/6 mr-3" />
          <div>
            <h3 className="font-bold">{comment.name}</h3>
            <h3 className="font-thin italic ">{comment.email}</h3>
            <h3 className="text-sm">{comment.body}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleComment;
export const SingleCommentMemo = React.memo(SingleComment);
