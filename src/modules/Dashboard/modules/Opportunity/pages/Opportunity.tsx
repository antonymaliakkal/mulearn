import React, { useState, useEffect } from 'react';

interface Props {
  // Define your props types here
  title: string;
}

const Opportunity: React.FC<Props> = ({ title }) => {
  // State using hooks
  const [count, setCount] = useState<number>(0);

  // useEffect hook to mimic componentDidMount and componentDidUpdate
  useEffect(() => {
    // This will run once after the initial render
    console.log('Component mounted or updated');
    
    return () => {
      // This will run when the component is unmounted or before it updates
      console.log('Cleanup');
    };
  }, [count]); // Only runs when `count` changes

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Opportunity;
