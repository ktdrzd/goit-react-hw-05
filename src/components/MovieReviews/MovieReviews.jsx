import { useParams } from 'react-router-dom';
import css from "./MovieReviews.module.css";
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchInfo } from '../../api';
import { MovieReviewsItem } from '../MovieReviewsItem/MovieReviewsItem';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoader(true);
    setError(false);
    setReviews([]);
    const getReviews = async () => {
      try {
        const response = await fetchInfo(movieId, 'reviews');
        setReviews(response.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>
        {reviews.length > 0 &&
        reviews.map((item) => {
          return (
            <li key={item.id}>
              <MovieReviewsItem data={item} />
            </li>
          )
        })}
      </ul>
      {reviews.length === 0 && !error && <p>No reviews</p>}
      {loader && <Loader/>}
      {error && <ErrorMessage/>}
    </>
  );
};

export default MovieReviews;

// import { useParams } from 'react-router-dom';
// // import css from './MovieReviews.module.css';
// import { useEffect, useState } from 'react';
// import { Loader } from '../Loader/Loader';
// import { fetchInfo } from '../../api';
// import { MovieReviewsItem } from '../MovieReviewsItem/MovieReviewsItem';
// import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

// const MovieReviews = () => {
//   const { movieId } = useParams();
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState(false);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     setLoader(true);
//     setError(false);
//     setReviews([]);

//     const getRewiews = async () => {
//       try {
//         const response = await fetchInfo(movieId, 'reviews');
//         setReviews(response.data.results);
//       } catch (error) {
//         console.log(error);
//         setError(true);
//       } finally {
//         setLoader(false);
//       }
//     };
//     getRewiews();
//   }, [movieId]);
//   return (
//     <>
//       <ul>
//         {reviews.length > 0 &&
//           reviews.map(item => {
//             return (
//               <li key={item.id}>
//                 <MovieReviewsItem data={item} />
//               </li>
//             );
//           })}
//       </ul>
//       {reviews.length === 0 && !error && <p>No reviews, sorry</p>}
//       {loader && <Loader />}
//       {error && <ErrorMessage />}
//     </>
//   );
// };

// export default MovieReviews;
