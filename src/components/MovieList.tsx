import React from 'react';
import { useSelector } from 'react-redux';

const MovieList: React.FC = () => {
  const state = useSelector((store) => store);

  console.log(state);

  return (
    <div />
  );
};

export default MovieList;
