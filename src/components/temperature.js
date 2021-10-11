import { useState } from 'react'

const Temperature = () => {
  const [temperatureC, setTemperatureC] = useState(0);
  const [temperatureF, setTemperatureF] = useState(32);

  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  const handleTemperatureC = (e) => {
    const value = e.target.value
    let input = parseFloat(value);
    if (Number.isNaN(input)) {
      input = 0
    }

    setTemperatureC(input)
    setTemperatureF(toFahrenheit(input));
  }

  const handleTemperatureF = (e) => {
    
    const value = e.target.value
    let input = parseFloat(value);
    if (Number.isNaN(input)) {
      input = 0
    }
    
    setTemperatureC(toCelsius(input))
    setTemperatureF(e.target.value)
  }

  return (
    <div>
      <TemperatureInput 
        scale="c"
        temperature={temperatureC}
        setTemperature={handleTemperatureC}
      />
      <TemperatureInput 
        scale="f"
        temperature={temperatureF}
        setTemperature={handleTemperatureF}
      />
    </div>
  )
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = (props) => {
  const {scale, temperature, setTemperature} = props
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input 
        value={temperature}
        onChange={setTemperature} 
      />
    </fieldset>
  );
}

export default Temperature