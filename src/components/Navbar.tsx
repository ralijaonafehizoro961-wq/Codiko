import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNavigateToProfile = () => {
    navigate('/profile');
    setShowUserMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="container flex-between">
        <div className="navbar-brand">
          <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer', margin: 0 }}>
            {t('common.appName')}
          </h1>
        </div>

        <div className="navbar-menu flex gap-md">
          {user && (
            <>
              <button className="nav-link" onClick={() => navigate('/dashboard')}>
                {t('common.dashboard')}
              </button>
              <button className="nav-link" onClick={() => navigate('/courses')}>
                {t('common.courses')}
              </button>
            </>
          )}
        </div>

        <div className="navbar-actions flex gap-md">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="navbar-select"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="mg">Malagasy</option>
          </select>

          <button className="navbar-button" onClick={toggleTheme} title={t('common.theme')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {user ? (
            <>
              <div className="user-menu-container">
                <button 
                  className="user-button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  title={user.username}
                >
                  <span className="user-icon">👤</span>
                  <span className="user-name">{user.username}</span>
                </button>

                {showUserMenu && (
                  <div className="user-dropdown-menu">
                    <button 
                      className="dropdown-item"
                      onClick={handleNavigateToProfile}
                    >
                      👤 Mon Profil
                    </button>
                    <hr className="dropdown-separator" />
                    <button 
                      className="dropdown-item logout-item"
                      onClick={() => {
                        handleLogout();
                        setShowUserMenu(false);
                      }}
                    >
                      🚪 Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button className="button button-primary" onClick={() => navigate('/login')}>
                {t('common.login')}
              </button>
              <button className="button button-secondary" onClick={() => navigate('/register')}>
                {t('common.register')}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
