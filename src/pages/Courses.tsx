import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { pythonCourses, getCourse, getChapter } from '../data/courses';
import { checkExerciseAnswer } from '../utils/exerciseChecker';
import { LessonViewer } from '../components/LessonViewer';
import { CodeBlock } from '../components/CodeBlock';
import './Courses.css';

export const CoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="courses-page">
      <div className="container">
        <h1>{t('common.courses')}</h1>
        <p className="courses-intro">Explorez nos cours Python complets et structurés</p>

        <div className="courses-grid stagger">
          {pythonCourses.map(course => (
            <div key={course.id} className="course-card anim-fade-up hover-raise">
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className={`difficulty-badge badge-animated difficulty-${course.difficulty}`}>
                  {course.difficulty === 'beginner' && 'Débutant'}
                  {course.difficulty === 'intermediate' && 'Intermédiaire'}
                  {course.difficulty === 'advanced' && 'Avancé'}
                </span>
              </div>

              <p className="course-description">{course.description}</p>

              <div className="course-stats">
                <div className="stat">
                  <span className="stat-icon">📚</span>
                  <span>{course.chapters.length} chapitres</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">⏱️</span>
                  <span>{course.totalDuration} min</span>
                </div>
              </div>

              <button
                className="button button-primary"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                Voir le cours
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const course = courseId ? getCourse(courseId) : null;

  if (!course) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <h1>Cours non trouvé</h1>
        <button className="button button-primary" onClick={() => navigate('/courses')}>
          Retour aux cours
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/courses')}>
          ← Retour aux cours
        </button>

        <div className="course-header-detail">
          <h1>{course.title}</h1>
          <p className="course-description-detail">{course.description}</p>

          <div className="course-meta-detail">
            <span>Chapitres: {course.chapters.length}</span>
            <span>Durée: {course.totalDuration} minutes</span>
            <span className={`difficulty-badge difficulty-${course.difficulty}`}>
              {course.difficulty === 'beginner' && 'Débutant'}
              {course.difficulty === 'intermediate' && 'Intermédiaire'}
              {course.difficulty === 'advanced' && 'Avancé'}
            </span>
          </div>
        </div>

        <div className="chapters-section">
          <h2>Chapitres du cours</h2>
          <div className="chapters-list stagger">
            {course.chapters.map((chapter, index) => {
              const isCompleted = user?.completedChapters.includes(chapter.id);
              return (
                <div key={chapter.id} className={`chapter-item anim-fade-up hover-raise ${isCompleted ? 'completed' : ''}`}>
                  <div className="chapter-number">{index + 1}</div>
                  <div className="chapter-info">
                    <h4>{chapter.title}</h4>
                    <p>{chapter.description}</p>
                    <div className="chapter-details">
                      <span>⏱️ {chapter.duration} min</span>
                      <span>📝 {chapter.lessons.length} leçons</span>
                      {isCompleted && <span className="completed-badge badge-animated small">✓ Complété</span>}
                    </div>
                  </div>
                  <button
                    className="button button-secondary"
                    onClick={() => navigate(`/chapter/${courseId}/${chapter.id}`)}
                  >
                    {isCompleted ? 'Revoir' : 'Commencer'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChapterPage: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [exerciseCode, setExerciseCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [exerciseCorrect, setExerciseCorrect] = useState(false);
  const [copiedFeedback, setCopiedFeedback] = useState('');

  const navigate = useNavigate();
  const { user, updateCompletedChapters, updateCompletedLessons } = useAuth();

  const course = courseId ? getCourse(courseId) : null;
  const chapter = courseId && chapterId ? getChapter(courseId, chapterId) : null;

  if (!course || !chapter) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <h1>Chapitre non trouvé</h1>
      </div>
    );
  }

  const currentLesson = chapter.lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === chapter.lessons.length - 1;

  const handleCompleteChapter = () => {
    if (user) {
      updateCompletedChapters(chapter.id);
      navigate(`/course/${courseId}`);
    }
  };

  const handleCopySolution = () => {
    navigator.clipboard.writeText(chapter.exercise.solution).then(() => {
      setCopiedFeedback('✅ Solution copiée dans le presse-papiers!');
      setTimeout(() => setCopiedFeedback(''), 3000);
    }).catch(() => {
      setCopiedFeedback('❌ Erreur lors de la copie');
      setTimeout(() => setCopiedFeedback(''), 3000);
    });
  };

  const handleNextChapter = () => {
    // Find the next chapter
    const currentCourseChapters = course.chapters;
    const currentChapterIndex = currentCourseChapters.findIndex(ch => ch.id === chapter.id);
    
    if (currentChapterIndex < currentCourseChapters.length - 1) {
      const nextChapter = currentCourseChapters[currentChapterIndex + 1];
      navigate(`/chapter/${courseId}/${nextChapter.id}`);
    } else {
      // If no more chapters, go back to course
      navigate(`/course/${courseId}`);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < chapter.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setShowExercise(false);
      setFeedback('');
      setShowSolution(false);
      setExerciseCorrect(false);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setShowExercise(false);
      setFeedback('');
      setShowSolution(false);
      setExerciseCorrect(false);
    }
  };

  const handleCheckExercise = () => {
    if (exerciseCode.trim().length === 0) {
      setFeedback('Veuillez écrire du code pour cet exercice.');
      return;
    }

    const result = checkExerciseAnswer(
      exerciseCode,
      chapter.exercise.solution,
      chapter.exercise.expectedOutput,
      chapter.exercise.description
    );

    const feedbackDisplay = `${result.message}\n\n${result.feedback}`;
    setFeedback(feedbackDisplay);

    // Track if exercise is correct
    if (result.isCorrect) {
      setExerciseCorrect(true);
      // Mark lesson as completed
      updateCompletedLessons(`${chapterId}-exercise`);
    } else {
      setExerciseCorrect(false);
      // Show a hint if wrong
      if (result.score < 50) {
        const hintText = chapter.exercise.hints && chapter.exercise.hints.length > 0 
          ? `\n\n💡 Indice: ${chapter.exercise.hints[0]}`
          : '';
        setFeedback(feedbackDisplay + hintText);
      }
    }
  };

  return (
    <div className="chapter-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate(`/course/${courseId}`)}>
          ← Retour au cours
        </button>

        <div className="chapter-header">
          <h1>{chapter.title}</h1>
          <p className="chapter-progress">
            Leçon {currentLessonIndex + 1} de {chapter.lessons.length}
          </p>
        </div>

        {!showExercise ? (
          <div className="lesson-content">
            <LessonViewer
              title={currentLesson.title}
              content={currentLesson.content}
              codeExample={currentLesson.codeExample}
              codeTitle="Exemple de Code"
            />

            <div className="lesson-navigation">
              <button
                className="button button-secondary"
                onClick={handlePreviousLesson}
                disabled={currentLessonIndex === 0}
              >
                ← Leçon précédente
              </button>

              {isLastLesson ? (
                <button
                  className="button button-primary"
                  onClick={() => setShowExercise(true)}
                >
                  Faire l'exercice →
                </button>
              ) : (
                <button
                  className="button button-primary"
                  onClick={handleNextLesson}
                >
                  Prochaine leçon →
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="exercise-content">
            <h2>Exercice: {chapter.exercise.title}</h2>
            <p className="exercise-description">{chapter.exercise.description}</p>

            <div className="code-editor">
              <h4>Code à compléter:</h4>
              <textarea
                value={exerciseCode}
                onChange={(e) => setExerciseCode(e.target.value)}
                placeholder="Écrivez votre code ici..."
                className="code-input"
              />
            </div>

            {chapter.exercise.hints && chapter.exercise.hints.length > 0 && (
              <details className="hints">
                <summary>Indices</summary>
                <ul>
                  {chapter.exercise.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              </details>
            )}

            <button className="button button-primary" onClick={handleCheckExercise}>
              Vérifier ma réponse
            </button>

            {feedback && (
              <div className={`feedback ${feedback.includes('✓') || exerciseCorrect ? 'success' : 'info'}`}>
                {feedback}
              </div>
            )}

            {copiedFeedback && (
              <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.3)', color: 'var(--accent-secondary)', textAlign: 'center', fontSize: '0.95rem', fontWeight: '500' }}>
                {copiedFeedback}
              </div>
            )}

            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                className="button button-secondary" 
                onClick={() => {
                  setShowSolution(!showSolution);
                  setCopiedFeedback('');
                }}
              >
                {showSolution ? '🙈 Masquer la solution' : '💡 Voir la solution'}
              </button>
              
              {showSolution && (
                <button 
                  className="button button-secondary" 
                  onClick={handleCopySolution}
                  style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))' }}
                >
                  📋 Copier la solution
                </button>
              )}
            </div>

            {showSolution && (
              <div className="solution-display">
                <h3>Solution proposée:</h3>
                <CodeBlock code={chapter.exercise.solution} language="python" />
                <div className="solution-explanation">
                  <h4>Explication:</h4>
                  <p>{chapter.exercise.explanation || 'Voici une approche correcte pour résoudre cet exercice.'}</p>
                </div>
              </div>
            )}

            <div className="lesson-navigation">
              <button
                className="button button-secondary"
                onClick={() => {
                  setShowExercise(false);
                  setShowSolution(false);
                }}
              >
                ← Retour aux leçons
              </button>

              {exerciseCorrect && (
                <>
                  {isLastLesson ? (
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        className="button button-primary"
                        onClick={handleCompleteChapter}
                      >
                        Terminer le chapitre ✓
                      </button>
                      
                      {course.chapters.findIndex(ch => ch.id === chapter.id) < course.chapters.length - 1 && (
                        <button
                          className="button button-secondary"
                          onClick={handleNextChapter}
                        >
                          Prochain chapitre →
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      className="button button-primary"
                      onClick={() => {
                        handleNextLesson();
                        setExerciseCorrect(false);
                        setShowSolution(false);
                        setCopiedFeedback('');
                      }}
                    >
                      Prochaine leçon →
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
