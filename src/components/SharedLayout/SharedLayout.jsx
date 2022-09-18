import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'Box';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loader.........</div>}>
        <Box as="div">
          <Outlet />
        </Box>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
