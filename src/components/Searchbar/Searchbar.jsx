import { Component } from 'react';
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

class Searchbar extends Component {
  state = {
    currentQueryValue: '',
  };

  handleQuerySearch = evt => {
    this.setState({ currentQueryValue: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.currentQueryValue.trim() === '') {
      return toast.error('Ведіть пошуковий запит!');
    }

    this.props.onSubmit(this.state.currentQueryValue);
    this.setState({ currentQueryValue: '' });
  };

  render() {
    return (
      <SearchbarStd>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            <IoMdSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleQuerySearch}
            value={this.state.currentQueryValue}
          />
        </SearchForm>
      </SearchbarStd>
    );
  }
}

export { Searchbar };
