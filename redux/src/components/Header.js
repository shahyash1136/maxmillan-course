import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../Reducers/authReducer";
import classes from "./Header.module.css";

const Header = () => {
  const loginState = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginState ? (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
