import css from "./MovieReviewsItem.module.css";

export const MovieReviewsItem = ({ data: { content, author } }) => {
  return (
    <>
      <div>
        <h3 className={css.author}>{author}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};
