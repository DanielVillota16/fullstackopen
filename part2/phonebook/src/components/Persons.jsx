const Persons = ({ persons, filter }) => {

  const isFilterOn = filter !== '';
  const filtered = isFilterOn
    ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return filtered.map(p => <p key={p.id}>{p.name} {p.number}</p>)
}

export default Persons