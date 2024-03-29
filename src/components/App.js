import '../styles/App.scss';
import initialData from '../data/clubs.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const [openWeek, setOpenWeek] = useState(false);
  const [openWeekend, setOpenWeekend] = useState(false);
  const [filter, setFilter] = useState('all');
  const [clickedDelete, setClickedDelete] = useState('');

  const handleSearch = (ev) => {
    console.log(ev.target.value);
    setFilter(ev.target.value);
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    const newClub = {
      name: newName,
      openOnWeekdays: openWeek,
      openOnWeekend: openWeekend,
    };
    setData([...data, newClub]);
    setNewName('');
    setOpenWeek('false');
    setOpenWeekend('false');
  };
  const handleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
  };
  const handleWeek = (ev) => {
    setOpenWeek(ev.currentTarget.checked);
  };

  const handleweekend = (ev) => {
    setOpenWeekend(ev.currentTarget.checked);
  };
  const handleDeleteCard = (ev) => {
    setClickedDelete(ev.target.id);
    console.log(clickedDelete);
    data.splice(clickedDelete, 1);
    setData([...data]);
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

  const htmlClubsLists = data
    .filter((oneCard) => {
      if (filter === 'all') {
        return data;
      } else if (filter === 'week') {
        return oneCard.openOnWeekdays === true;
      } else {
        return oneCard.openOnWeekend === true;
      }
    })
    .map((oneClub, index) => (
      <li key={index} className='section__list--li'>
        <i
          className='far fa-times-circle'
          onClick={handleDeleteCard}
          id={index}
        ></i>
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
    <div className='page'>
      <header className='header'>
        <h1 className='header__title'>Mis clubs</h1>
      </header>
      <main className='main'>
        <section className='section__search'>
          <p className='section__search__paragraph'>
            ¿Cúales son los Clubs que quieres ver?
          </p>
          <select onChange={handleSearch} className='section__search__select'>
            <option value='all'>Todos</option>
            <option value='week'>Los que abren entre semana</option>
            <option value='weekend'>Los que abren el fin de semana</option>
          </select>
        </section>
        <section className='section__list'>
          <ul className='section__list'>{htmlClubsLists}</ul>
        </section>
        <section className='section__newclub'>
          <h2 className='section__newclub--title'>Añadir un nuevo Club</h2>
          <form className='newClub'>
            <label className='newClub__title'>Nombre del club:</label>
            <input
              className='newClub__input'
              type='text'
              name='name'
              id='name'
              placeholder='Escriba el nombre del grupo'
              onChange={handleChangeName}
              value={newName}
            />
            <label>¿Abre entre semana?</label>
            <input
              className='newClub__input'
              id='openWeek'
              type='checkbox'
              name='openWeek'
              value='openWeek'
              onChange={handleWeek}
              checked={openWeek}
            />
            <label>¿Abre los fines de semana?</label>
            <input
              className='newClub__input'
              id='openWeend'
              type='checkbox'
              name='openWeekend'
              value='openWeekend'
              onChange={handleweekend}
              checked={openWeekend}
            />
            <input
              className='newClub__input'
              type='submit'
              value='Añadir un nuevo club'
              onClick={handleClick}
            />
          </form>
        </section>
      </main>
      <footer className='footer'>
        <small className='footer__copy'>mesalina&copy;2021</small>
      </footer>
    </div>
  );
}

export default App;
