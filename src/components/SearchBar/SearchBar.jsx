import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ handleSubmit }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.trim().toLowerCase();
    if (!query) {
      toast.error('Please enter tour search query');
      return;
    }
    handleSubmit(query);
    evt.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={css.div}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            <FaSearch className={css.icon} />
          </button>
        </div>
      </form>
    </>
  );
};
