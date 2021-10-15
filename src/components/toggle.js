import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../redux/actions/themeAction.js';

const Toggle = () => {
  const [isToggleOn, setToggleOn] = useState(false)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme())
    setToggleOn(() => !isToggleOn)
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;