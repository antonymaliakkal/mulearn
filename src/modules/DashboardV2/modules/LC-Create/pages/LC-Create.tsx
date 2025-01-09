import React, { useEffect, useState } from 'react';
import styles from './LC-Create.module.css';

const LcCreate:React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);
  
    return (
      <div className="App">
        <h1>Hello, React with TypeScript!</h1>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    );  
}

export default LcCreate;