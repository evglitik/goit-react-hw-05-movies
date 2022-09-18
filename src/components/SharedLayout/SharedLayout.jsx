import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </header>
      <Suspense fallback={<div>Loader.........</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
