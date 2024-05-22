
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counterSlice';

function App() {

  const counter = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="counter">
        <button className="decrement" onClick={()=>dispatch(decrement())}>-</button>
        <div className="display">{counter}</div>
        <button className="increment" onClick={()=>dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
