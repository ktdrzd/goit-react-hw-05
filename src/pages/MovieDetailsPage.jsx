import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchById } from '../api';
import { FaHome } from "react-icons/fa";
import { MovieDetailsItem } from '../components/MovieDetailsItem/MovieDetailsItem';
// import clsx from 'clsx';
import {Loader} from "../components/Loader/Loader";
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [dataById, setDataById] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backInLocation = location.state?.from ?? '/';

  useEffect(() => {
    if (!id) return;
    setError(false);
    const fetchDataById = async () => {
      try {
        setLoader(true);
        const data = await fetchById(id);
        setDataById(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchDataById();
  }, [id]);

  return (
    <main>
      <Link to={backInLocation}><FaHome/></Link>
      {dataById && <MovieDetailsItem data={dataById} />}
      <div>
        <NavLink to={'cast'} state={{ from: location.state?.from }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: location.state?.from }}>
            Reviews
        </NavLink>
      </div>
      <Outlet/>
      {loader && <Loader/>}
      {error && <ErrorMessage/>}
    </main>
  );
};

export default MovieDetailsPage;
