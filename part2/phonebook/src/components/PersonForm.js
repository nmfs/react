import React from 'react'

const PersonForm = ({persons, setPersons,
                      newName, setNewName,
                      newNumber, setNewNumber}) => {
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
      alert(newName + ' is already added to phonebook')
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
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