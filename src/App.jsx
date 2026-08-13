import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import 'flowbite/dist/flowbite.css';
import ProkerPage from './pages/proker';
import AppShell from './AppShell';
import DivisiPage from './pages/divisi';
import ErrorPage from './pages/ErrorPage';
import FungsioPage from './pages/fungsionaris/FungsioPage';
import QuizPage from './pages/QuizPage';


function App() {
  useEffect(() => {
    let lenis;
    try {
      if (window.Lenis) {
        lenis = new window.Lenis();

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } else {
        console.error("Lenis is not defined on window");
      }
    } catch (e) {
      console.error("Lenis initialization error:", e);
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
  <Routes >
    <Route path="/" element={<AppShell />}>
      <Route index element={<HomePage />} />
      <Route path="/divisi/:divisi" element={<DivisiPage />} />
      <Route path="/programkerja/:proker" element={<ProkerPage />}/>
      <Route path="/fungsionaris" element={<FungsioPage />}/>
      <Route path="/quiz" element={<QuizPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}

export default App
