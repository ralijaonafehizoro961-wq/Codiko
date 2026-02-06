import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { pythonCourses } from '../data/courses';
import { FuelGaugeProgress } from '../components/FuelGaugeProgress';
import './Profile.css';

export const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  // Calculate stats
  const totalChapters = pythonCourses.reduce((sum, course) => sum + course.chapters.length, 0);
  const totalLessons = pythonCourses.reduce((sum, course) => 
    sum + course.chapters.reduce((chSum, ch) => chSum + ch.lessons.length, 0), 
  0);
  const completedChapters = user.completedChapters.length;
  const completedLessons = user.completedLessons.length;
  const chapterPercentage = Math.round((completedChapters / totalChapters) * 100);
  const lessonPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handlePasswordChange = () => {
    setPasswordError(false);
    setPasswordMessage('');

    if (!oldPassword || !newPassword || !confirmPassword) {
      setPasswordError(true);
      setPasswordMessage('Tous les champs sont obligatoires');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
      setPasswordMessage('Les nouveaux mots de passe ne correspondent pas');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError(true);
      setPasswordMessage('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    // Here you would verify the old password with backend
    // For now, we'll just show success
    setPasswordMessage('✅ Mot de passe modifié avec succès!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => {
      setIsEditingPassword(false);
      setPasswordMessage('');
    }, 2000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="container">
        {/* Header */}
        <div className="profile-header">
          <button className="back-button" onClick={() => navigate('/dashboard')}>
            ← Retour au tableau de bord
          </button>
          <h1>Mon Profil</h1>
        </div>

        <div className="profile-layout">
          {/* Left side - User info */}
          <div className="profile-left">
            {/* Profile Card */}
            <div className="profile-card">
              <div className="profile-avatar-section">
                <div className="profile-avatar">
                  <span className="avatar-icon">👤</span>
                </div>
                <button className="change-avatar-btn">
                  📷 Changer la photo
                </button>
              </div>

              <div className="profile-info">
                <div className="info-group">
                  <label>Nom d'utilisateur</label>
                  <p className="info-value">{user.username}</p>
                </div>

                <div className="info-group">
                  <label>Adresse email</label>
                  <p className="info-value">{user.email}</p>
                </div>

                <div className="info-group">
                  <label>Date d'inscription</label>
                  <p className="info-value">
                    {new Date(user.enrollmentDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="security-card">
              <h3>🔒 Sécurité</h3>
              
              {!isEditingPassword ? (
                <button 
                  className="button button-secondary"
                  onClick={() => setIsEditingPassword(true)}
                  style={{ width: '100%' }}
                >
                  Modifier le mot de passe
                </button>
              ) : (
                <div className="password-form">
                  <div className="form-group">
                    <label>Ancien mot de passe</label>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Entrez votre mot de passe actuel"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Nouveau mot de passe</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Entrez votre nouveau mot de passe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirmer le mot de passe</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmez le nouveau mot de passe"
                      className="form-input"
                    />
                  </div>

                  {passwordMessage && (
                    <div className={`password-message ${passwordError ? 'error' : 'success'}`}>
                      {passwordMessage}
                    </div>
                  )}

                  <div className="password-actions">
                    <button
                      className="button button-primary"
                      onClick={handlePasswordChange}
                      style={{ flex: 1 }}
                    >
                      Confirmer
                    </button>
                    <button
                      className="button button-secondary"
                      onClick={() => {
                        setIsEditingPassword(false);
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                        setPasswordMessage('');
                      }}
                      style={{ flex: 1 }}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Logout */}
            <button 
              className="logout-button"
              onClick={handleLogout}
            >
              🚪 Déconnexion
            </button>
          </div>

          {/* Right side - Progress */}
          <div className="profile-right">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{completedChapters}</div>
                <div className="stat-label">Chapitres complétés</div>
                <div className="stat-subtitle">sur {totalChapters}</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">{completedLessons}</div>
                <div className="stat-label">Leçons complétées</div>
                <div className="stat-subtitle">sur {totalLessons}</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">{chapterPercentage}%</div>
                <div className="stat-label">Progression Chapitres</div>
                <div className="progress-mini">
                  <div 
                    className="progress-mini-fill"
                    style={{ width: `${chapterPercentage}%` }}
                  />
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-number">{lessonPercentage}%</div>
                <div className="stat-label">Progression Leçons</div>
                <div className="progress-mini">
                  <div 
                    className="progress-mini-fill"
                    style={{ width: `${lessonPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Fuel Gauges */}
            <div className="gauges-section">
              <h2>Barre de Progression</h2>
              <div className="gauges-grid">
                <FuelGaugeProgress 
                  current={completedChapters}
                  total={totalChapters}
                  label="Chapitres"
                />
                <FuelGaugeProgress 
                  current={completedLessons}
                  total={totalLessons}
                  label="Leçons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
