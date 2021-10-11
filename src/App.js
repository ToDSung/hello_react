import './App.css';
import { useState, useEffect } from 'react';
import Title from './components/title.js';
import Clock from './components/clock.js';
import Toggle from './components/toggle.js';
import Input from './components/input.js';
import Temperature from './components/temperature.js';


const todoList = [
  {
    id: 1,
    status: 'false',
    text: 'practice react'
  },
  {
    id: 2,
    status: 'false',
    text: 'play lol'
  },
]
const todoTexts = todoList.map(({ text }) =>
  <li>{text}</li>
);


function App() {
  // hook 的寫法
  const [date, setDate] = useState(new Date())
  // setInterval(() => {
  //   setDate(() => new Date())
  // }, 1000);

  // setInerval 要搭配 useEffect，不然會瘋狂 re render
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(() => new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="App">
      {
        <Title
          name="Hello title！"
        />
      }
      {
        <Clock date={date} />
      }
      {
        <Toggle />
      } 
      {
        <Input />
      }
      {
        <Temperature />
      }
    </div>
  );
}

export default App;
