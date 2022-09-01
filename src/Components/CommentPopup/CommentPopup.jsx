import React, { useCallback, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { updateComment } from '../../store/features/comments/commentsSlice';
import { InputPopupMemo } from '../InputPopup/InputPopup';

function CommentPopup({ closePopup, comment }) {
  const [nameInput, setNameInput] = useState(comment.name);
  const [bodyInput, setBodyInput] = useState(comment.body);
  const [open] = useState(true);
  const dispatch = useDispatch();

  const handleChangeNameInput = useCallback((e) => {
    setNameInput(e.target.value);
  }, []);

  const handleChangeBodyInput = useCallback((e) => {
    setBodyInput(e.target.value);
  }, []);

  const onEditCommentPost = () => {
    try {
      dispatch(updateComment({
        id: comment.id,
        changes: {
          name: nameInput,
          body: bodyInput,
          postId: comment.postId,
        },
      })).unwrap();
    } catch (err) {
      // console.log(err);
    }
    closePopup();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full z-10 h-full ">
      <div className="bg-black opacity-[.6] w-full -z-10 h-full absolute  p-3" />
      <form action="" className="flex justify-center items-center w-full h-full p-3 animate-scale-in">
        <div className="min-w-fit w-[300px] h-[400px] md:h-[43%] bg-white rounded-md m-auto p-3 relative">
          <button
            className="absolute right-3 cursor-pointer"
            onClick={closePopup}
            type="button"
            aria-label="close"
          >
            <GrClose />
          </button>
          {open && <h4 className="text-center text-third font-bold text-xl mt-6  mb-6  p-4">Edit The Comment</h4>}
          <InputPopupMemo
            name="comment name"
            value={nameInput}
            id="commentName"
            handleInput={handleChangeNameInput}
          />
          <InputPopupMemo
            name="comment body"
            value={bodyInput}
            id="commentBody"
            handleInput={handleChangeBodyInput}
          />
          <button
            type="button"
            className="bg-third hover:bg-opacity-[.8] ease-in duration-300 text-white rounded-md p-2 uppercase font-light mt-8 m-auto w-full"
            onClick={onEditCommentPost}
          >update
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentPopup;
export const CommentPopupMemo = React.memo(CommentPopup);
