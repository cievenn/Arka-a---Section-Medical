import React from 'react';

/**
 * Quote — Citation stylisée pour doctrines et principes importants.
 * Affiche un blockquote avec bordure lumineuse et typographie serif.
 */
const Quote = ({ children, author = null, className = "" }) => (
  <blockquote className={`kiri-quote ${className}`}>
    <p>{children}</p>
    {author && (
      <footer className="mt-3 text-sm font-mono text-cyan-400/70 not-italic tracking-wide">
        — {author}
      </footer>
    )}
  </blockquote>
);

export default Quote;
