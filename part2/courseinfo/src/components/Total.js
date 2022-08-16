import React from 'react'

const Total = ({parts}) => {
  const sum = (parts) => {
    return parts.reduce((s, p) => s + p.exercises, 0)
  }
  return (
    <b>
      total of {sum(parts)} exercises
    </b>
  )
}

export default Total