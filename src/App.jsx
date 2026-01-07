import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="packages" element={<Tours />} />
        <Route path="tour/:slug" element={<TourDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<ArticleDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
