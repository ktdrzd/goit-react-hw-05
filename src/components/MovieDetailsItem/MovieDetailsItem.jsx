// import css from "./MovieDetailsItem.module.css";

export const MovieDetailsItem = ({
  data: { title, backdrop_path, release_date, overview, genres },
}) => {
  const photoURL = 'https://image.tmdb.org/t/p/original/';
  const genresList = genres && genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <img src={`${photoURL}${backdrop_path}`} alt="" />
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <ul>
          <li>
            <h3>Overwiew: </h3>
            <p>{overview || 'We apologize, but rhere is no description yet'}</p>
          </li>
          <li>
            <h3>Genres: </h3>
            <p>{genresList}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
