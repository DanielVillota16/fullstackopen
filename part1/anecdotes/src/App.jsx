import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min) + min);

const Section = ({ title, content, votes }) => (
  <>
    <h1>{title}</h1>
    {content}
    <p>has {votes} votes</p>
  </>
);

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {

  const getRandomAnecdoteIndex = () => getRandomInt(anecdotes.length, 0);
  const [selected, setSelected] = useState(getRandomAnecdoteIndex());
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const maxVotes = Math.max(...votes);
  const mostVoted = anecdotes[votes.findIndex(value => value === maxVotes)];

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  }

  const handleNext = () => setSelected(getRandomAnecdoteIndex());

  return (
    <>
      <Section
        title="Anecdote of the day"
        content={anecdotes[selected]}
        votes={votes[selected]}
      />
      <div>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleNext} text="next anecdote" />
      </div>
      <Section
        title="Anecdote with most votes"
        content={mostVoted}
        votes={maxVotes}
      />
    </>
  )
}

export default App