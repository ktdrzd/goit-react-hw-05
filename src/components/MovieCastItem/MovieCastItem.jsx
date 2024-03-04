// import css from "./MovieCastItem.module.css";

export const MovieCastItem = ({ data }) => {
  const photoURL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div>
      <img src={`${photoURL}${data.profile_path}`} alt={data.name} width={240} />

      <p>{data.name}</p>
      <p>Character: {data.character}</p>
    </div>
  );
};
