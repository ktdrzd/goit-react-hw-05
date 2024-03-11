import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchByID } from '../api';
import { FaHome } from "react-icons/fa";
import { MovieDetailsItem } from '../components/MovieDetailsItem/MovieDetailsItem';
// import clsx from 'clsx';
import {Loader} from "../components/Loader/Loader";
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import css from "../pages/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [dataById, setDataById] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backInLocation = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    setError(false);
    const fetchDataById = async () => {
      try {
        setLoader(true);
        const data = await fetchByID(movieId);
        setDataById(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchDataById();
  }, [movieId]);

  return (
    <main className={css.main}>
      <div className={css.cont}>
      <Link to={backInLocation} className={css.home}><FaHome/></Link>
      {dataById && <MovieDetailsItem data={dataById} />}
      </div>
      <div className={css.links}>
        <NavLink to={'cast'} state={{ from: location.state?.from }} className={css.item}>
          | Cast |
        </NavLink>
        <NavLink to={'reviews'} state={{ from: location.state?.from }} className={css.item}>
          | Reviews |
        </NavLink>
      </div>
      <Outlet/>
      {loader && <Loader/>}
      {error && <ErrorMessage/>}
    </main>
  );
};

export default MovieDetailsPage;
