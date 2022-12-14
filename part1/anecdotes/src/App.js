import { useState } from 'react'

const Favorite = ({anecdotes, points}) => {
  let top = 0
  for(let i=1; i<anecdotes.length; i++)
    if(points[i] > points[top])
      top = i
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[top]}</div>
      <div>has {points[top]} votes</div>
    </>
  )
}

const Daily = ({anecdotes, selected, points, setPoints, setSelected}) => {
  function incrementPoints(index) {
    const copy = [...points]
    copy[index] += 1
    return () => setPoints(copy)
  }
  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>{anecdotes[selected]}</div>
    <div>has {points[selected]} votes</div>
    <button onClick={incrementPoints(selected)}>vote</button>
    <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}>next anecdote</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  return (
    <>
      <Daily anecdotes={anecdotes} selected={selected}
             points={points} setPoints={setPoints}
             setSelected={setSelected}/>
      <Favorite anecdotes={anecdotes} points={points}/>
    </>
  )
}

export default App