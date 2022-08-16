import { useState, useEffect} from "react";
import axios from 'axios'

const CountriesItem = ({country, setPattern}) => {
  return (
    <li key={country.name.common}>
      {country.name.common}
      <button onClick={() => setPattern(country.name.common)}>show</button>
    </li>
  )
}

const ShowCountries = ({countries, setPattern}) => {
  if(countries.length > 10)
    return (<div>Too many matches, specify another filter</div>)
  else if(countries.length > 1)
    return (
      <ul>
        {countries.map(country => <CountriesItem
          country={country}
          setPattern={setPattern}
        />)}
      </ul>
    )
  else if(countries.length === 0)
    return (<div>No match, specify another filter</div>)
  else {
    const languages = Object.values(countries[0].languages)
    return (
     <div>
        <h1>{countries[0].name.common}</h1>
        <div>capital {countries[0].capital[0]}</div>
        <div>area {countries[0].area}</div>
        <h2>languages:</h2>
        <ul>
          {languages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={countries[0].flags.png} width="200"/>
      </div>
    )
  }
}

function App() {
  const [countries, setCountries] = useState([])
  const [pattern, setPattern] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilter = (event) => {
    setPattern(event.target.value)
  }

  const filteredCountries = countries.filter(
    country => country.name.common.toUpperCase().indexOf(pattern.toUpperCase()) !== -1
  )

  return (
    <>
      <div>
        find countries <input onChange={handleFilter} />
      </div>
      <ShowCountries countries={filteredCountries} setPattern={setPattern}/>
    </>
  );
}

export default App;
