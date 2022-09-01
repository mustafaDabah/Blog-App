import React, { useCallback, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import Avator from '../../Assets/images/avator.png';
import { deleteComment } from '../../store/features/comments/commentsSlice';
import CommentPopup from '../CommentPopup/CommentPopup';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function SingleComment({ comment }) {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [displayLoading, setDisplayLoading] = useState(false);

  const closePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

  const deleteSingleComment = () => {
    setDisplayLoading(true);
    dispatch(deleteComment(comment));
  };

  return (
    <>
      {openPopup && (
        <CommentPopup
          closePopup={closePopup}
          comment={comment}
        />
      )}
      <div className="bg-white rounded-md p-4 mb-3 relative">
        {displayLoading && (
          <div className="absolute z-10 bg-white opacity-[0.7]  top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
        <div className="absolute flex right-2 top-6 md:top-4">
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
        <div className="flex justify-between items-center md:flex-nowrap flex-wrap">
          <img src={Avator} alt="" className="w-1/4 mb-3 md:mb-0 md:w-1/6 mr-3" />
          <div>
            <h4 className="font-bold">{comment.name}</h4>
            <h4 className="font-thin italic ">{comment.email}</h4>
            <h4 className="text-sm">{comment.body}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleComment;
export const SingleCommentMemo = React.memo(SingleComment);
