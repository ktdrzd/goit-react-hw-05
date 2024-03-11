import { MovieItem } from '../MovieItem/MovieItem';
import css from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ dataMovie }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {dataMovie.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id} state={{ from: location }}>
              {/* <MovieItem data={item} poster={item.poster || 'sorry, but poster not found'}/> */}
              <MovieItem data={item} poster={item.poster}/>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
