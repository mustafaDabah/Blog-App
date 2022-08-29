import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts, selectPostError, selectPostsByUser } from '../../store/features/posts/postSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import Alert from '../Alert/Alert';
import { CollapseMemo } from '../Collapse/Collapse';
import PostsList from '../PostsList/PostsList';
import { SearchInputMemo } from '../SearchInput/SearchInput';
import { selectCommentError } from '../../store/features/comments/commentsSlice';

function PostsSection() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const posts = useSelector((state) => selectPostsByUser(state, +userId));
  const errorPosts = useSelector(selectPostError);
  const errorComments = useSelector(selectCommentError);

  const handleInputChanges = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(fetchPosts()).unwrap();
  }, [dispatch]);

  const selectPostsBySearch = useMemo(() => posts.filter((post) => post.body.toLowerCase().includes(value.toLowerCase())), [posts, value]);

  console.log('post section', selectPostsBySearch);

  if (errorPosts || errorComments) return (<Alert title="please try again network error" />);

  return (
    <div className="container">
      <CollapseMemo title="user posts">
        <SearchInputMemo handleInputChanges={handleInputChanges} />
        {posts.length ? (<PostsList posts={selectPostsBySearch} />) : (<LoadingSpinner />) }
      </CollapseMemo>
    </div>
  );
}

export default PostsSection;
