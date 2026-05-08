import React from 'react';
import { Droplet } from 'lucide-react';

/**
 * Divider — Séparateur décoratif entre les grandes sections.
 * Affiche une ligne avec un symbole central lumineux.
 */
const Divider = ({ symbol = "droplet", className = "" }) => {
  const symbols = {
    droplet: <Droplet size={14} />,
    diamond: <span className="text-lg leading-none">◆</span>,
    cross: <span className="text-lg leading-none">✦</span>,
    dot: <span className="text-lg leading-none">●</span>,
    wave: <span className="text-lg leading-none">〜</span>,
  };

  return (
    <div className={`kiri-divider my-12 ${className}`} aria-hidden="true">
      <div className="kiri-divider-symbol animate-soft-pulse">
        {symbols[symbol] || symbols.droplet}
      </div>
    </div>
  );
};

export default Divider;
