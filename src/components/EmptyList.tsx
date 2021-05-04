import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const EmptyList: React.FC = () => {
  const { error } = useTypedSelector((store) => store.movie);

  return (
    <div className="h-100 d-flex align-items-center flex-column">
      {error ? <p>{error}</p> : <span />}
      <h1>Тут пока ничего нет :с</h1>
    </div>
  );
};

export default EmptyList;
