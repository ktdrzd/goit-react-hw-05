import css from "./MovieCastItem.module.css";
import placeholder from '../PlaceHolderImage/placeholder.jpg';


export const MovieCastItem = ({ data }) => {
  const photoURL = 'https://image.tmdb.org/t/p/original/';
  const castSrc = data.profile_path ? `${photoURL}${data.profile_path}` : placeholder;
  return (
    <div className={css.container}>
      <img src={`${castSrc}`} alt={data.name} width={240} height={360}/>

      <p className={css.name}>{data.name}</p>
      <p className={css.character}>Character: {data.character}</p>
    </div>
  );
};
