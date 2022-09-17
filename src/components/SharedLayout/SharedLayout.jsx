import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </header>
      <Outlet/>
    </>
  );
};

export default SharedLayout;
