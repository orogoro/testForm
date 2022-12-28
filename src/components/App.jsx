import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation, Loader, Container } from './';

const Form = lazy(() => import('../pages/formPage/FormPage'));
const Users = lazy(() => import('../pages/usersPage/UsersPage'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Users" element={<Users />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
