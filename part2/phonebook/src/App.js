import { useState, useEffect } from 'react'
import personService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pattern, setPattern] = useState('')

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
      <h2>Phonebook</h2>

      <Filter setPattern={setPattern}/>

      <h3>Add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} setPersons={setPersons}/>
    </div>
  )
}

export default App