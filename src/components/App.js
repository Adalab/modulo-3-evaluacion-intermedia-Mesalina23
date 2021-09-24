import '../styles/App.css';
import initialData from '../data/clubs.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [openWeek, setOpenWeek] = useState(false);
  const [openWeekend, setOpenWeekend] = useState(false);
  const handleClick = (ev) => {
    ev.preventDefault();
    const newClub = {
      name: newName,
      openOnWeekdays: openWeek,
      openOnWeekend: openWeekend,
    };
    setData([...data, newClub]);
    setNewName('');
    setOpenWeek('');
    setOpenWeekend('');
  };
  const handleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
    //console.log(ev.currentTarget.value);
  };
  const handleWeek = (ev) => {
    console.log(ev.currentTarget);
    setOpenWeek(ev.currentTarget.checked);
  };

  const handleweekend = (ev) => {
    console.log(ev.currentTarget);
    setOpenWeekend(ev.currentTarget.checked);
  };

  const openClub = (oneClub) => {
    if (oneClub.openOnWeekdays === true) {
      return 'si';
    } else if (oneClub.openOnWeekdays === false) {
      return 'no';
    }
  };
  const closeClub = (oneClub) => {
    if (oneClub.openOnWeekend === true) {
      return 'si';
    } else if (oneClub.openOnWeekend === false) {
      return 'no';
    }
  };
  const htmlClubsLists = data.map((oneClub, index) => (
    <li key={index}>
      <p>
        <label>#:{index}</label>
        {oneClub.name}
      </p>
      <p>
        <label>Abierto entre semana:</label>
        {openClub(oneClub)}
      </p>

      <p>
        <label>Abierto el fin de semana:</label>
        {closeClub(oneClub)}
      </p>
    </li>
  ));

  return (
    <div className='App'>
      <header>
        <h1>Mis clubs</h1>
      </header>
      <main>
        <ul className='cardsContainer'>{htmlClubsLists}</ul>
        <h2>Añadir un nuevo Club</h2>
        <form>
          <label>Nombre del club:</label>
          <input
            className=''
            type='text'
            name='name'
            id='name'
            placeholder='Escriba el nombre del grupo'
            onChange={handleChangeName}
            value={newName}
          />
          <label>¿Abre entre semana?</label>
          <input
            id='openWeek'
            type='checkbox'
            name='openWeek'
            value='openWeek'
            onChange={handleWeek}
            checked={openWeek}
          />
          <label>¿Abre los fines de semana?</label>
          <input
            id='openWeend'
            type='checkbox'
            name='openWeekend'
            value='openWeekend'
            onChange={handleweekend}
            checked={openWeekend}
          />
          <input
            className=''
            type='submit'
            value='Añadir un nuevo club'
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
