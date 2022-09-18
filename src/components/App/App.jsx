import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const CastList = lazy(() => import('../CastList/CastList'));
const ReviewsList = lazy(() => import('../ReviewsList/ReviewsList'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="*" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>
      </Route>
    </Routes>
  );
};
