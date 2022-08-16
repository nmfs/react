import { useState, useEffect } from 'react'
import personService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const Notification = ({message}) => {
  if(message === null) {
    return null
  }

  return(
    <div className='msg'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Phonebook app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pattern, setPattern] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const filteredPersons = persons.filter(
    person => person.name.toUpperCase().indexOf(pattern.toUpperCase()) !== -1
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />

      <Filter setPattern={setPattern}/>

      <h3>Add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setMessage={setMessage}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} setPersons={setPersons}/>

      <Footer />
    </div>
  )
}

export default App