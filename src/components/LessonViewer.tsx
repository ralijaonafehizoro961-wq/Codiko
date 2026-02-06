import React, { useMemo, useState } from 'react';
import { CodeBlock } from './CodeBlock';
import './LessonViewer.css';

interface LessonViewerProps {
  title: string;
  content: string;
  codeExample?: string;
  codeTitle?: string;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  title,
  content,
  codeExample,
  codeTitle
}) => {
  // Split content by sections (starting with # for headings)
  const sections = useMemo(() => {
    return content.split(/\n(?=#+\s)/);
  }, [content]);

  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
    // Open first section by default
    const initial: Record<number, boolean> = {};
    sections.forEach((_, i) => {
      initial[i] = i === 0;
    });
    return initial;
  });

  const toggleSection = (i: number) => {
    setOpenSections(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const renderSection = (section: string, index: number) => {
    // Check if section starts with heading
    const headingMatch = section.match(/^(#+)\s+(.+)\n?([\s\S]*)/);

    if (headingMatch) {
      const headingText = headingMatch[2];
      const bodyText = headingMatch[3].trim();

      const isOpen = !!openSections[index];

      return (
        <div key={index} className="lesson-section">
          <button
            type="button"
            className={`section-heading section-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => toggleSection(index)}
          >
            <span className="heading-text">{headingText}</span>
            <span className="heading-arrow" aria-hidden>{isOpen ? '▾' : '▸'}</span>
          </button>

          <div className={`section-body collapsible ${isOpen ? 'expanded' : 'collapsed'}`}>
            {bodyText.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        </div>
      );
    }

    // Regular paragraph
    return (
      <div key={index} className="lesson-section">
        {section.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex} className="lesson-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="lesson-viewer">
      <h2 className="lesson-title">{title}</h2>

      <div className="lesson-content">
        {sections.map((section, index) => renderSection(section, index))}
      </div>

      {codeExample && (
        <div className="code-example-section">
          <h3 className="code-example-title">
            <span className="code-icon">💻</span>
            {codeTitle || 'Exemple de Code'}
          </h3>
          <CodeBlock code={codeExample} language="python" />
        </div>
      )}
    </div>
  );
};
