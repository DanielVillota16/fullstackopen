import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / (all || 1);
  const positive = 100 * good / (all || 1);

  const statisticLines = [
    { text: "good", value: good },
    { text: "neutral", value: neutral },
    { text: "bad", value: bad },
    { text: "all", value: all },
    { text: "average", value: average },
    { text: "positive", value: `${positive} %` }
  ].map((line, index) => ({ ...line, key: index }));

  return (
    all
      ? (
        <table>
          <tbody>
            {statisticLines.map(sl => <StatisticLine key={sl.key} text={sl.text} value={sl.value} />)}
          </tbody>
        </table>
      )
      : <p>No feedback given</p>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (setState) => () => setState(prev => prev + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={increment(setGood)} />
      <Button text={"neutral"} onClick={increment(setNeutral)} />
      <Button text={"bad"} onClick={increment(setBad)} />
      <br />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
