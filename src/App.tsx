import { useCallback, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ChildComponent } from './ChildComponent';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const fun = (val) => {
    return console.log(val);
  };
  let fun3 = useCallback(fun, [count2]);
  let val5 = useMemo(() => {
    expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount((val) => {
            return val + 1;
          });
        }}
      >
        Click me to increse count
      </button>
      <button
        onClick={() => {
          setCount2((val) => {
            return val + 1;
          });
        }}
      >
        Click me to increse count2
      </button>
      Count : {count}
      Count2 : {count2}
      Memo value : {val5}
      <ChildComponent func={fun3} />
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;
