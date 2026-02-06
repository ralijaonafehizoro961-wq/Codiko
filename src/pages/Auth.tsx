import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import './Auth.css';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || t('auth.invalidCredentials'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>{t('auth.loginTitle')}</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">{t('common.email')}</label>
              <input
                id="email"
                type="email"
                placeholder={t('auth.enterEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('common.password')}</label>
              <input
                id="password"
                type="password"
                placeholder={t('auth.enterPassword')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="button button-primary" disabled={loading}>
              {loading ? t('common.submit') + '...' : t('auth.signIn')}
            </button>
          </form>

          <p className="auth-link">
            {t('auth.noAccount')}{' '}
            <Link to="/register">{t('common.register')}</Link>
          </p>

          {/* Demo credentials info */}
          <div className="demo-info">
            <p><strong>Demo Account:</strong></p>
            <p>Email: demo@codiko.com</p>
            <p>Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }

    setLoading(true);

    try {
      await register(username, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || t('auth.invalidCredentials'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>{t('auth.registerTitle')}</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">{t('common.username')}</label>
              <input
                id="username"
                type="text"
                placeholder={t('auth.enterUsername')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('common.email')}</label>
              <input
                id="email"
                type="email"
                placeholder={t('auth.enterEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('common.password')}</label>
              <input
                id="password"
                type="password"
                placeholder={t('auth.enterPassword')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">{t('common.confirmPassword')}</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder={t('auth.enterPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="button button-primary" disabled={loading}>
              {loading ? t('common.submit') + '...' : t('auth.signUp')}
            </button>
          </form>

          <p className="auth-link">
            {t('auth.alreadyHaveAccount')}{' '}
            <Link to="/login">{t('common.login')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
