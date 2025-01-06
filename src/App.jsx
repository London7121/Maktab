import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import Loading from './components/Loading';
import { ScrollToTopBtn } from './components/ScrollTopBtn';
import SingleNews from './pages/SingleNews';
import './App.css'
import Leaders from './pages/Leaders';

// Use React.lazy to load components lazily
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Teachers = lazy(() => import('./pages/Teachers'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));
const Qabul = lazy(() => import('./pages/Qabul'));
const Galereya = lazy(() => import('./pages/Galereya'));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="flex justify-center items-center h-full">
          <Suspense fallback={<Loading />}>
            <ScrollToTopBtn />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/leader" element={<Leaders />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qabul" element={<Qabul />} />
              <Route path="/galereya" element={<Galereya />} />
              <Route path="/news/:id" element={<SingleNews />} />
            </Routes>
          </Suspense>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
