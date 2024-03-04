import { MovieItem } from '../MovieItem/MovieItem';
// import css from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

export const MovieCast = ({ dataMovie }) => {
  const location = useLocation;
  return (
    <>
      <ul>
        {dataMovie.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id} state={{ from: location }}>
              <MovieItem data={item} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};
