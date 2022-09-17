import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (request.trim() === '') {
      console.log('Введіть назву фільму');
      return;
    }
    onSubmit(request);
    setRequest('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={request}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setRequest(e.currentTarget.value.toLowerCase())}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;
