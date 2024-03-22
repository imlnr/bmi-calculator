import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const storeState = useSelector((state) => state);
  console.log(storeState);
  
  return (
    <div>
      <pre>{JSON.stringify(storeState, null, 2)}</pre>
    </div>
  );
};

export default Home;
