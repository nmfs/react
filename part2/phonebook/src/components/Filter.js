import React from 'react'

const Filter = ({setPattern}) => {
  const handleFilter = (event) => {
    setPattern(event.target.value)
  }

  return (
    <div>
      filter shown with <input onChange={handleFilter}/>
    </div>
  )
}

export default Filter