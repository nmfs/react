import React from 'react'
import personService from '../services/phonebook'

const PersonForm = ({persons, setPersons,
                      newName, setNewName,
                      newNumber, setNewNumber, setMessage}) => {
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    let found = false
    persons.forEach(person => {
        if (person.name === newName) found = true
      }
    )
    if (found) {
      alert(`Person ${newName} is already in the server`)
      return
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setMessage(
          `Added ${newName}`
        )
        setTimeout (() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleNameChange}/>
      </div>
      <div>
        number: <input onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

  )
}

export default PersonForm