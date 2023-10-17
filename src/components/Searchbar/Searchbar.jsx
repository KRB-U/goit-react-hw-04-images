import { useState } from 'react';

// ICONS
import { IoMdSearch } from 'react-icons/io';

//NOTIFY
import toast from 'react-hot-toast';

//CSS
import {
  SearchbarStd,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [currentQueryValue, setCurrentQueryValue] = useState('');

  const handleQuerySearch = evt => {
    setCurrentQueryValue(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (currentQueryValue.trim() === '') {
      return toast.error('Ведіть пошуковий запит!');
    }

    onSubmit(currentQueryValue);
    setCurrentQueryValue(currentQueryValue);
  };

  return (
    <SearchbarStd>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <IoMdSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQuerySearch}
          value={currentQueryValue}
        />
      </SearchForm>
    </SearchbarStd>
  );
};

export { Searchbar };
