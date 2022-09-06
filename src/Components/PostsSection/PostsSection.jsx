import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../store/features/posts/postSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import Alert from '../Alert/Alert';
import { CollapseMemo } from '../Collapse/Collapse';
import PostsList from '../PostsList/PostsList';
import { SearchInputMemo } from '../SearchInput/SearchInput';

function PostsSection() {
  const { userId } = useParams();
  const [value, setValue] = useState('');
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useGetPostsQuery(userId);

  const handleInputChanges = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const selectPostsBySearch = useMemo(() => posts?.filter((post) => post.body.toLowerCase().includes(value.toLowerCase())), [posts, value]);

  if (isError) return (<Alert title="please try again network error" />);

  return (
    <div className="container">
      <CollapseMemo title="user posts">
        <SearchInputMemo handleInputChanges={handleInputChanges} />
        {!isLoading ? (<PostsList posts={selectPostsBySearch} />) : (<LoadingSpinner />) }
      </CollapseMemo>
    </div>
  );
}

export default PostsSection;
