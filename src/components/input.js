import { useState } from 'react';
import higherOrderComponent from './hocComponent';

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

export default higherOrderComponent(Input)