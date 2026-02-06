import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import './Home.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('home.title')}</h1>
            <p className="hero-subtitle">{t('home.subtitle')}</p>
            <p className="hero-description">{t('home.description')}</p>
            
            {!isAuthenticated ? (
              <div className="hero-buttons">
                <button
                  className="button button-primary"
                  onClick={() => navigate('/login')}
                >
                  {t('home.getStarted')}
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => navigate('/register')}
                >
                  {t('common.register')}
                </button>
              </div>
            ) : (
              <button
                className="button button-primary"
                onClick={() => navigate('/courses')}
              >
                {t('common.continueCourse')}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>{t('home.features')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>{t('home.interactiveLessons')}</h3>
              <p>Apprenez Python avec des leçons interactives et des exemples concrets.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>{t('home.practicalExercises')}</h3>
              <p>Pratiquez avec des exercices adaptés à votre niveau de compétence.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>{t('home.progressTracking')}</h3>
              <p>Suivez votre progression et voyez vos améliorations au fil du temps.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>{t('home.offlineAccess')}</h3>
              <p>Accédez aux cours sans connexion Internet où que vous soyez.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container text-center">
          <h2>Prêt à commencer votre parcours?</h2>
          <p>Rejoignez des milliers d'apprenants qui maîtrisent Python avec Codiko</p>
          {!isAuthenticated && (
            <button
              className="button button-primary"
              onClick={() => navigate('/register')}
            >
              {t('common.register')}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
