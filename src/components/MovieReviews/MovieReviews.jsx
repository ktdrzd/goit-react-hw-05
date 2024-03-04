import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchInfo } from '../../api';
import { MovieReviewsItem } from '../MovieReviewsItem/MovieReviewsItem';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const MovieReviews = () => {
  const { id } = useParams;
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoader(true);
    setError(false);
    setReviews([]);

    const getRewiews = async () => {
      try {
        const response = await fetchInfo(id, 'credis');
        setReviews(response.cast);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getRewiews();
  }, [id]);
  return (
    <>
      <ul>
        {reviews.length > 0 &&
          reviews.map(item => {
            return (
              <li key={item.id}>
                <MovieReviewsItem data={item} />
              </li>
            );
          })}
      </ul>
      {reviews.length === 0 && !error && <p>No reviews, sorry</p>}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};
