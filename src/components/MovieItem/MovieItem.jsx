// import css from "./MovieItem.module.css";
import placeholder from '../PlaceHolderImage/placeholder.jpg';

export const MovieItem = ({ data: { poster_path, title } }) => {
  const photoURL = 'https://image.tmdb.org/t/p/original/';
  const posterSrc = poster_path ? `${photoURL}${poster_path}` : placeholder;
  return (
    <div>
      <img src={`${posterSrc}`} alt={title} width={300} height={450} />
    </div>
  );
};