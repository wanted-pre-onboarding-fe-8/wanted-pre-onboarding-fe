import React, { useRef, useState, useEffect } from 'react';
import FeedHeader from './FeedHeader';
import FeedBody from './FeedBody';
import styled from 'styled-components';
import { useAuthState } from '../../context/AuthContext';
function Feed({ feed }) {
  const { userId } = useAuthState();

  const {
    profileImage,
    author,
    postImage,
    like,
    comments: defaultComments,
  } = feed;
  const commentInput = useRef(null);
  const [comments, setComments] = useState(defaultComments);
  const [isImageReady, setIsImageReady] = useState(false);
  console.log(userId);
  useEffect(() => {
    commentInput.current.value = '';
  }, [comments]);

  const handleAddComment = (event) => {
    event.preventDefault();
    if (commentInput.current.value === '') return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: userId,
        comment: commentInput.current.value,
      },
    ]);
  };

  return (
    <Container isImageReady={isImageReady}>
      <FeedHeader profileImage={profileImage} author={author} />
      <FeedBody
        postImage={postImage}
        like={like}
        comments={comments}
        refCommentInput={commentInput}
        onSubmit={handleAddComment}
        onLoad={setIsImageReady}
      />
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  display: ${({ isImageReady }) => (isImageReady ? 'flex' : 'none')};
  max-width: 550px;
  min-width: 470px;
  width: 40%;
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #fafafa;
  flex-direction: column;
  @media (max-width: 499px) {
    min-width: 0px;
    width: 95%;
  }
`;
