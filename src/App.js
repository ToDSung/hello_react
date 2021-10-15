import './App.css';
import { useState, useEffect } from 'react';
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from './redux/store/configureStore.js';
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


const App = () => {
  // hook 的寫法
  const [date, setDate] = useState(new Date());
  // setInterval(() => {
    //   setDate(() => new Date())
    // }, 1000);
    
    // setInerval 要搭配 useEffect，不然會瘋狂 re render
  // useEffect 第二個參數 array 為空，表示 componentDidMount: 該動作只執行一次
  // return 的值表示 componentWillUnmount 所執行的工作
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(() => new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const darkTheme = useSelector(state => state.darkTheme);
  
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
      <Router>
        <div className="App">
          <p>react router example</p>
          <ul>
            <li><Link to="counter">Counter</Link></li>
            <li><Link to="form">Form</Link></li>
          </ul>
          <Switch>
            <Route path='/counter' component={Toggle}/>
            <Route path='/form' component={Input}/>
          </Switch>
        </div>
      </Router>
      {
        darkTheme ? "ON" : "OFF"
      }
    </div>
  );
}

const AppWrapper = () => {
  const store = configureStore()
  return (
    <Provider store={store}> 
      <App />
    </Provider>
  )
}

export default AppWrapper;
