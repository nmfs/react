import React from 'react'

const Total = ({parts}) => {
  const sum = (parts) => {
    let total = 0
    for(let i = 0; i< parts.length; i++)
      total += parts[i].exercises
    return total
  }
  return (
    <div>
      total of {sum(parts)} exercises
    </div>
  )
}

export default Total