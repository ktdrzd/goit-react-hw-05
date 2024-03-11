import css from "./MovieDetailsItem.module.css";

export const MovieDetailsItem = ({
  data: { title, backdrop_path, release_date, overview, genres },
}) => {
  const photoURL = 'https://image.tmdb.org/t/p/original/';
  const genresList = genres && genres.map(genre => genre.name).join(', ');
  return (
    <div className={css.container}>
      <img src={`${photoURL}${backdrop_path}`} alt="" className={css.image}/>
      <div>
        <h2 className={css.title}>
          {title} ({release_date})
        </h2>
        <ul className={css.list}>
          <li>
            <h3 className={css.overview}>Overwiew: </h3>
            <p className={css.text}>{overview || 'We apologize, but rhere is no description yet'}</p>
          </li>
          <li>
            <h3 className={css.genres}>Genres: </h3>
            <p className={css.text}>{genresList}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
