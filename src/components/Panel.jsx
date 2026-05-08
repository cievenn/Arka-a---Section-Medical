import React from 'react';

const Panel = ({ children, className = "", hover = true }) => (
  <div className={`glass-panel rounded-xl p-8 transition-all duration-300 ${className} ${hover ? 'group' : ''}`}>
    <div className="tech-corner tc-tl"></div>
    <div className="tech-corner tc-tr"></div>
    <div className="tech-corner tc-bl"></div>
    <div className="tech-corner tc-br"></div>
    <div className="scanline"></div>
    {children}
  </div>
);

export default Panel;
