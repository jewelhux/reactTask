import React from 'react';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/pages/AboutPage';
import { MainPage } from './components/pages/MainPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { FormPage } from './components/pages/FormPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>\
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
