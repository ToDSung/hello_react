import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../redux/actions/themeAction.js';
import { Button } from '@material-ui/core';

function App() {
  return <Button color="primary">Hello World</Button>;
}

const Toggle = () => {
  const [isToggleOn, setToggleOn] = useState(false)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme())
    setToggleOn(() => !isToggleOn)
  }

  return (
    <Button   
      variant="contained"
      color="primary" 
      onClick={handleClick}
    >
      {isToggleOn ? "ON" : "OFF"}
    </Button>
  );
};

export default Toggle;