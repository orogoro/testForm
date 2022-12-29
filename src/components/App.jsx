import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { Navigation, Loader, Container } from './';

const Form = lazy(() => import('../pages/formPage/FormPage'));
const Users = lazy(() => import('../pages/usersPage/UsersPage'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader size={150} />}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Users" element={<Users />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </Container>
  );
};
