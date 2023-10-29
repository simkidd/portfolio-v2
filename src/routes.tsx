import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Works from './pages/works/Works';
import Contact from './pages/contact/Contact';
import Project from './pages/works/Project';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>)
}

export default AppRoutes