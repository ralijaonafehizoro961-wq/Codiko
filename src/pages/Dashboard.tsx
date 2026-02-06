import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useCountUp } from '../hooks/useCountUp';
import { pythonCourses } from '../data/courses';
import './Dashboard.css';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  if (!user) {
    navigate('/login');
    return null;
  }

  const recentChapters = useMemo(() => {
    const allChapters = pythonCourses.flatMap(course =>
      course.chapters.map(chapter => ({
        ...chapter,
        courseId: course.id,
        courseName: course.title
      }))
    );
    return allChapters.filter(ch => user.completedChapters.includes(ch.id)).slice(0, 3);
  }, [user.completedChapters]);

  // Calculate detailed stats
  const totalLessons = pythonCourses.reduce((sum, course) => 
    sum + course.chapters.reduce((chSum, ch) => chSum + ch.lessons.length, 0), 
  0);
  const completedLessons = user.completedLessons.length;
  
  // Get all chapters with completion details
  const allChaptersWithStats = useMemo(() => {
    return pythonCourses.flatMap(course =>
      course.chapters.map(chapter => {
        const lessonsCompleted = chapter.lessons.filter(lesson => 
          user.completedLessons.includes(`${chapter.id}-${lesson.id}`) || 
          user.completedLessons.includes(`${chapter.id}-exercise`)
        ).length;
        return {
          ...chapter,
          courseId: course.id,
          courseName: course.title,
          lessonsCompleted,
          totalLessons: chapter.lessons.length,
          isCompleted: user.completedChapters.includes(chapter.id)
        };
      })
    );
  }, [user.completedChapters, user.completedLessons]);

  // Calculate totals
  const totalCompleted = user.completedChapters.length;
  const totalChapters = pythonCourses.reduce((sum, course) => sum + course.chapters.length, 0);
  const progressPercentage = Math.round((totalCompleted / totalChapters) * 100);
  const lessonProgressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Count up animations
  const animatedCompleted = useCountUp(totalCompleted, 1000);
  const animatedTotal = useCountUp(totalChapters, 1200);
  const animatedPercentage = useCountUp(progressPercentage, 1400);
  const animatedLessonsCompleted = useCountUp(completedLessons, 1100);
  const animatedLessonsTotal = useCountUp(totalLessons, 1300);
  const animatedLessonPercentage = useCountUp(lessonProgressPercentage, 1500);

  return (
    <div className="dashboard-page">
      <div className="container dashboard-container">
        {/* Welcome Section */}
        <section className="dashboard-header">
          <h1>{t('dashboard.welcome')}, {user.username}! 👋</h1>
          <p>Continuez votre parcours d'apprentissage Python</p>
        </section>

        {/* Progress Section */}
        <section className="progress-section">
          <div className="progress-card">
            <h3>{t('dashboard.progress')}</h3>
            <div className="progress-stats">
              <div className="stat">
                <span className="stat-number">{animatedCompleted}</span>
                <span className="stat-label">{t('dashboard.completedChapters')}</span>
              </div>
              <div className="stat">
                <span className="stat-number">{animatedTotal}</span>
                <span className="stat-label">Chapitres total</span>
              </div>
              <div className="stat">
                <span className="stat-number">{animatedPercentage}%</span>
                <span className="stat-label">Progression</span>
              </div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-fill anim-progress"
                  style={{ width: `${animatedPercentage}%` }}
                />
              </div>
              <p className="progress-text">{animatedCompleted} sur {animatedTotal} chapitres complétés</p>
            </div>

            {/* Lessons progress */}
            <div className="lessons-progress" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Progression des leçons</h4>
              <div className="progress-stats" style={{ marginBottom: '12px' }}>
                <div className="stat">
                  <span className="stat-number">{animatedLessonsCompleted}</span>
                  <span className="stat-label">Leçons complétées</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{animatedLessonsTotal}</span>
                  <span className="stat-label">Total leçons</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{animatedLessonPercentage}%</span>
                  <span className="stat-label">Progression leçons</span>
                </div>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill anim-progress"
                    style={{ width: `${animatedLessonPercentage}%`, background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))' }}
                  />
                </div>
                <p className="progress-text">{animatedLessonsCompleted} sur {animatedLessonsTotal} leçons complétées</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Chapters */}
        {recentChapters.length > 0 && (
          <section className="recent-chapters">
            <h2>{t('dashboard.recentChapters')}</h2>
            <div className="chapters-grid stagger">
              {recentChapters.map(chapter => (
                <div key={chapter.id} className="chapter-card anim-fade-up hover-raise">
                  <div className="chapter-header">
                    <h4>{chapter.title}</h4>
                    <span className="chapter-course">{chapter.courseName}</span>
                  </div>
                  <p className="chapter-description">{chapter.description}</p>
                  <div className="chapter-meta">
                    <span>⏱️ {chapter.duration} min</span>
                    <span className="badge badge-secondary badge-animated small">Complété ✓</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Courses */}
        <section className="all-courses">
          <h2>{t('dashboard.allChapters')}</h2>
          
          {/* Detailed Chapters Progress */}
          <div className="chapters-progress-list" style={{ marginBottom: '40px' }}>
            {allChaptersWithStats.length > 0 ? (
              <div className="chapters-grid stagger">
                {allChaptersWithStats.map(chapter => (
                  <div 
                    key={chapter.id} 
                    className={`chapter-progress-card anim-fade-up hover-raise ${chapter.isCompleted ? 'completed' : ''}`}
                    style={{
                      background: chapter.isCompleted 
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)'
                        : 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(59, 130, 246, 0.05) 100%)',
                      border: `2px solid ${chapter.isCompleted ? 'var(--accent-secondary)' : 'var(--accent-primary)'}`,
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                      <div>
                        <h4 style={{ color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{chapter.title}</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{chapter.courseName}</span>
                      </div>
                      {chapter.isCompleted && (
                        <span style={{ fontSize: '1.5em' }}>✓</span>
                      )}
                    </div>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 12px 0' }}>
                      {chapter.description}
                    </p>
                    
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Leçons:</span>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                          {chapter.lessonsCompleted} / {chapter.totalLessons}
                        </span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.1)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            height: '100%', 
                            background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))',
                            width: `${chapter.totalLessons > 0 ? (chapter.lessonsCompleted / chapter.totalLessons) * 100 : 0}%`,
                            transition: 'width 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span>⏱️ {chapter.duration} min</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Aucun chapitre commencé. Commencez votre apprentissage dès maintenant!
              </p>
            )}
          </div>

          <button
            className="button button-primary"
            onClick={() => navigate('/courses')}
          >
            Voir tous les cours →
          </button>
        </section>
      </div>
    </div>
  );
};
