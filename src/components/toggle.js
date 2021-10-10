import { useState } from 'react'

const Toggle = () => {
  const [isToggleOn, setToggleOn] = useState(false)
  const handleClick = () => setToggleOn(() => !isToggleOn)

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;