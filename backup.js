import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCountdown, startCountdown, stopCountdown, tickCountdown } from './features/timer/timerSlice';
import { useState } from 'react';

const App = () => {
  const { minutes, seconds, isRunning } = useSelector((state) => state.timer);
  const [intervalReference, setIntervalReference] = useState(null)
  const dispatch = useDispatch();

  const handleStartOrPause = () => {
    if(!isRunning){
      dispatch(startCountdown());
      setIntervalReference(setInterval(() => {
        dispatch(tickCountdown());
      }, 1000))
    } else {
      dispatch(stopCountdown())
      clearInterval(intervalReference)
    }
  };

  const handleReset = () => {
    dispatch(setCountdown(0));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
      <div>
        <input type="number" value={minutes} onChange={(e) => dispatch(setCountdown(e.target.value))} />
        
      </div>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      <div></div>
      <button onClick={handleStartOrPause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
       
      </header>
    </div>
  );
};

export default App;
