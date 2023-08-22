const Total = ({ parts }) => {
  const total = parts.reduce((sum, curr) => sum + curr.exercises, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )
}

export default Total