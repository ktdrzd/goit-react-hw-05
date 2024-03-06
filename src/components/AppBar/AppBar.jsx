import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={css.home}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.movies}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default AppBar;