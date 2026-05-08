import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CadreLegal from './pages/CadreLegal';
import EducationTheorie from './pages/EducationTheorie';
import ProceduresOperatoires from './pages/ProceduresOperatoires';
import ExpertiseLegiste from './pages/ExpertiseLegiste';
import AdministrationDOSS from './pages/AdministrationDOSS';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CadreLegal />} />
        <Route path="science-anatomie" element={<EducationTheorie />} />
        <Route path="medecine-intervention" element={<ProceduresOperatoires />} />
        <Route path="chirurgie-chakra" element={<ExpertiseLegiste />} />
        <Route path="medecine-archive" element={<AdministrationDOSS />} />
      </Route>
    </Routes>
  );
}

export default App;
