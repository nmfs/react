
import React from 'react'
import personService from "../services/phonebook";

const Person = ({person, deletePerson}) => {
  return (
    <li className='note'>
      {person.name} {person.number}
      <button onClick={deletePerson}>delete</button>
    </li>
  )
}


const Persons = ({persons, setPersons}) => {

  const deletePersonOf = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`))
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
  }

  return (
    <ul>
      {persons.map(person =>
        <Person
          key={person.name}
          person={person}
          deletePerson={() => deletePersonOf(person.id)}
        />)}
    </ul>
  )
}

export default Persons