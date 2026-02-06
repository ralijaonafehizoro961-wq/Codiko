import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/Home';
import { LoginPage, RegisterPage } from './pages/Auth';
import { DashboardPage } from './pages/Dashboard';
import { ProfilePage } from './pages/Profile';
import { CoursesPage, CourseDetailPage, ChapterPage } from './pages/Courses';
import { initializeDemoData } from './data/initDemo';
import './styles/global.css';
import './styles/components.css';

function App() {
  useEffect(() => {
    initializeDemoData();
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <div className="app">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:courseId" element={<CourseDetailPage />} />
                <Route
                  path="/chapter/:courseId/:chapterId"
                  element={
                    <ProtectedRoute>
                      <ChapterPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
