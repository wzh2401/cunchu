import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';

// Dashboard Pages
import Overview from './pages/dashboard/Overview';
import Analysis from './pages/dashboard/Analysis';
import Predictions from './pages/dashboard/Predictions';
import Settings from './pages/dashboard/Settings';

// Auth Pages
import Login from './pages/auth/Login';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard Routes - The "Rationalized Sidebar" lives here */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="predictions" element={<Predictions />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;