const Filter = ({ filter, onFilter }) => {

  return (
    <>
      filter shown with <input value={filter} onChange={onFilter} />
    </>
  )
}

export default Filter