import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameAlreadyTaken = persons.some(p => p.name.toLowerCase() === newName.toLowerCase())
    if (nameAlreadyTaken) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onFilter={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={handleSubmit}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App