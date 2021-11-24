import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import s from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) return setQuery('');

    onSubmit(query.trim().toLowerCase());
    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type='text'
        name='searchQuery'
        value={query}
        autoComplete='off'
        autoFocus
        placeholder='Search movies'
        onChange={e => setQuery(e.target.value)}
      />

      <button type='submit' className={s.button} aria-label='Search images'>
        <ImSearch style={{ width: 22, height: 22 }} />
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SearchForm };
