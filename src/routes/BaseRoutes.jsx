import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
import ModalCertCard from '../scenes/Certificates/ModalCertCard/ModalCertCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const Certificates = lazy(() => import('../scenes/Certificates/Projects'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
  CERTIFICATES: '/certificates',
  CERTIFICATE: '/certificate/:id',

};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.CERTIFICATES} element={<Certificates />} />
        <Route path={routes.CERTIFICATE} element={<ModalCertCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PROJECT} element={<ModalProjectCard />} />
          <Route path={routes.CERTIFICATE} element={<ModalCertCard />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;