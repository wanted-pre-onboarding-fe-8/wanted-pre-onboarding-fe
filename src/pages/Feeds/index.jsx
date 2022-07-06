import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GNB from '../../components/GNB';
import FeedContainer from './FeedContainer';
import { getFeed } from '../../services/getFeed';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getFeed();
      setFeeds(result);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <GNB />
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <FeedContainer feeds={feeds} isLoading={isLoading} />
      )}
    </>
  );
}

export default Feeds;

const Loader = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 800;
`;
