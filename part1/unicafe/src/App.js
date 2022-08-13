import {useState} from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = () => good + neutral + bad
  return (
    <>
     <h1> statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all()}</div>
      <div>average {(good - bad)/ all()}</div>
      <div>positive {100 * good/ all()} %</div>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
