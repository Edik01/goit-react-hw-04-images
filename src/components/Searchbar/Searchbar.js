import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
export const Searchbar = ({ handleSubmit }) => {
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(event.target.elements.value.value);
    event.target.reset();
  };
  return (
    <Header className="searchbar">
      <SearchForm onSubmit={onSubmit} className="form">
        <SearchFormButton type="submit" className="button">
          <span className="button-label">Search</span>
        </SearchFormButton>

        <SearchFormInput
          name="value"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
