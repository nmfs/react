import {useState} from 'react'

const StatisticsLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = () => good + neutral + bad
  if (all() === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
     <h1> statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='all' value={all()}/>
          <StatisticsLine text='average' value={(good - bad)/all()}/>
          <tr><td>positive</td><td>{100 * good/ all()} %</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
