/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SafariDetailsPage } from './pages/SafariDetailsPage';
import { DestinationDetailsPage } from './pages/DestinationDetailsPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { AllToursPage } from './pages/AllToursPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<AllToursPage />} />
        <Route path="/safari/:id" element={<SafariDetailsPage />} />
        <Route path="/destination/:id" element={<DestinationDetailsPage />} />
        <Route path="/service/:id" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}
