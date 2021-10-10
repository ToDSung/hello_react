import './App.css';
import { useState } from 'react';
import Title from './components/title.js';
import Clock from './components/clock.js';
import Toggle from './components/toggle.js';


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
  // const [date, setDate] = useState(new Date())
  // setInterval(() => {
  //   setDate(() => new Date())
  // }, 1000);
  
  return (
    <div className="App">
      {
        <Title
          name="Hello title！"
        />
      }
      {/* {
        <Clock date={date} />
      } */}
      {
      // <Toggle />
      } 
    </div>
  );
}

export default App;
