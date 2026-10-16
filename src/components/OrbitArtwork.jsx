import React from "react";

/** Decorative orbital systems, with a distinct arrangement on every page. */
export default function OrbitArtwork({ variant = "work", compact = false }) {
  const rings = {work: 3, services: 2, process: 4, team: 3, contact: 4, membership: 2}[variant] || 2;
  return <div className={`orbit-art orbit-art--${variant} ${compact ? 'orbit-art--compact' : ''}`} aria-hidden="true">
    <span className="orbit-art__core" />
    {Array.from({length: rings}, (_, i) => <span key={i} className={`orbit-art__ring orbit-art__ring--${i+1}`}>
      <span className="orbit-art__planet"><i className="orbit-art__moon" /></span>
      {i % 2 === 0 && <span className="orbit-art__planet orbit-art__planet--second"><i className="orbit-art__moon" /></span>}
    </span>)}
  </div>;
}
