import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const Home = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));

function App() {
  return (
    <>
      <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;