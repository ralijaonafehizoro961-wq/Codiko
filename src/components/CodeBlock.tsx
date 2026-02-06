import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', title }) => {
  const codeRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = code.trim();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="code-block-wrapper">
      {title && <div className="code-block-title">{title}</div>}

      <div className="code-toolbar">
        <button className="copy-button" onClick={handleCopy} aria-label="Copy code">
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>

      <pre>
        <code ref={(el) => { codeRef.current = el; }} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};
