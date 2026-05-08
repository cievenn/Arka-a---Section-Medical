import React from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * ImagePlaceholder — Cadre stylisé pour illustrations.
 * Accepte une prop `src` pour afficher une vraie image,
 * sinon affiche un placeholder cliquable.
 */
const ImagePlaceholder = ({ 
  src = null, 
  alt = "Illustration", 
  caption = "Illustration à ajouter",
  aspectRatio = "16/9",
  className = "" 
}) => (
  <div className={`image-placeholder rounded-xl ${className}`} style={{ aspectRatio }}>
    {src ? (
      <div className="relative w-full h-full">
        <img src={src} alt={alt} className="rounded-xl" loading="lazy" />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
            <p className="text-sm text-slate-300 font-mono text-center">{caption}</p>
          </div>
        )}
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center h-full gap-3 p-8">
        <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700/50">
          <ImageIcon size={32} className="text-slate-500" />
        </div>
        <p className="text-sm text-slate-500 font-mono text-center tracking-wide">{caption}</p>
        <p className="text-xs text-slate-600 text-center">Remplacer par un lien d'image</p>
      </div>
    )}
  </div>
);

export default ImagePlaceholder;
