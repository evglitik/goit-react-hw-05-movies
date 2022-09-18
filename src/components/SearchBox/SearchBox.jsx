import PropTypes from 'prop-types';

import { useState } from 'react';
import { SubmitButtom } from './SearchBox.styled';

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
      <SubmitButtom type="submit">
        <span>Search</span>
      </SubmitButtom>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
