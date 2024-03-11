import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInfo } from '../../api';
import { Loader } from '../Loader/Loader';
import css from "./MovieCast.module.css";
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';

const MovieCast = () => {
  const { movieId } = useParams();
  const [ loader, setLoader ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ cast, setCast ] = useState([]);

  useEffect(() => {
    setLoader(true);
    setError(false);
    setCast([]);

    const getCast = async () => {
      try {
        const response = await fetchInfo(movieId, 'credits');
        setCast(response.cast);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
      <ul className={css.list}>
        {cast.length > 0 &&
          cast.map(item => {
            return (
              <li key={item.id} className={css.item}>
                <MovieCastItem data={item} />
              </li>
            );
          })}
      </ul>
      {cast.length === 0 && !error && <p>No info, sorry</p>}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default MovieCast;