import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [techs, addTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    addTech([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      addTech(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techsSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
