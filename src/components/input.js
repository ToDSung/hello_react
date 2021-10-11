import { useState } from 'react';

const Input = () => {
  const [ text, setText ] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange}/>  
      <input value="hi" />
    </div>
  )
}

export default Input