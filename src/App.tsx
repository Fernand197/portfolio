/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useTheme } from './hooks/useTheme';
import Layout from './components/Layout';
import Home from './components/Home';
import Resume from './components/Resume';
import Works from './components/Works';
import Contacts from './components/Contacts';

function App() {
  const { setTheme, getTheme }: any = useTheme();
  useEffect(() => {
    setTheme(getTheme())
  }, [getTheme, setTheme])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/resume' element={<Layout><Resume /></Layout>} />
          <Route path='/works' element={<Layout><Works /></Layout>} />
          <Route path='/contacts' element={<Layout><Contacts /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
