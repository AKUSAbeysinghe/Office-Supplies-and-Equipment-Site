import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Furniture from "./components/Pages/furniture.jsx";
import TechFeature from "./components/Pages/TechFeature.jsx";
import StationeryFeature from "./components/Pages/StationaryFeature.jsx";
import Solutions from "./components/Pages/Solutions.jsx";
import About from "./components/Pages/About.jsx";
import Footer from "./components/Footer";

import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";
import Contact from "./components/Pages/Contact.jsx";
import SustainabilityPage from "./components/Pages/Sustainability.jsx";
import CareerPage from "./components/Pages/Careers.jsx";

// Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

// ScrollToTop
import ScrollToTop from "./components/ScrollToTop.jsx";

// Layout
function Layout({ children }) {
  const location = useLocation();

  const hideLayout = [
    "/login",
    "/signup",
    "/admin",
    "/admin-lookbook",
  ].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Navbar */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Navbar />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Pages */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/furniture"
          element={
            <Layout>
              <Furniture />
            </Layout>
          }
        />

        <Route
          path="/tech"
          element={
            <Layout>
              <TechFeature />
            </Layout>
          }
        />

        <Route
          path="/Stationary"
          element={
            <Layout>
              <StationeryFeature />
            </Layout>
          }
        />





       <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />


        <Route
          path="/solutions"
          element={
            <Layout>
              <Solutions />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />

        <Route
          path="/FAQ"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />


        <Route
          path="/Sustainability"
          element={
            <Layout>
              <SustainabilityPage />
            </Layout>
          }
        />


        <Route
          path="/Careers"
          element={
            <Layout>
              <CareerPage />
            </Layout>
          }
        />

        {/* Admin Pages */}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPanel />
            </Layout>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-12 font-sans">
                404: Page Not Found
              </div>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;