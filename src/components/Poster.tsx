import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'stream' && (
          <g fill="none" stroke={a}>
            <rect x="196" y="58" width="168" height="104" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M268 92 l30 18 l-30 18 Z" fill={a} fillOpacity="0.85" stroke="none" />
            <circle cx="214" cy="74" r="4" fill={a} stroke="none" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect key={i} x={196 + i * 21} y="186" width="15" height="22" rx="3" strokeWidth="1.6" strokeOpacity={0.25 + i * 0.09} fill={i > 4 ? a : 'none'} fillOpacity="0.3" />
            ))}
            <path d="M190 228 h180" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 6" />
          </g>
        )}
        {project.motif === 'agent' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="50" width="160" height="120" rx="10" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M200 70 h160" strokeOpacity="0.5" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={212 + i * 10} cy="60" r="3" fill={a} fillOpacity={0.4 + i * 0.2} stroke="none" />
            ))}
            <rect x="216" y="84" width="70" height="12" rx="3" strokeOpacity="0.6" />
            <rect x="216" y="104" width="120" height="12" rx="3" strokeOpacity="0.4" />
            <rect x="216" y="130" width="52" height="22" rx="5" strokeWidth="2" stroke="#ff5a6e" />
            <path d="M300 140 l26 26 l-8 2 l6 12 l-6 3 l-6 -12 l-6 6 Z" fill={a} stroke="none" />
            <circle cx="296" cy="204" r="22" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M286 204 l7 7 l13 -14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'code' && (
          <g fill="none" stroke={a} strokeLinecap="round">
            <path d="M214 80 l-22 26 l22 26 M346 80 l22 26 l-22 26" strokeWidth="3" strokeOpacity="0.85" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1={238 + (i % 2) * 14} x2={238 + (i % 2) * 14 + [80, 60, 92, 44, 70][i]} y1={78 + i * 14} y2={78 + i * 14} strokeWidth="4" strokeOpacity={0.3 + i * 0.12} />
            ))}
            {[[220, 200], [270, 176], [320, 206], [360, 180], [290, 232]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 1 ? 9 : 6} fill={i === 1 ? a : 'none'} fillOpacity="0.7" strokeWidth="1.6" />
            ))}
            <path d="M226 200 L261 178 M279 178 L314 204 M326 204 L354 182 M314 210 L296 228 M276 184 L288 226" strokeWidth="1.2" strokeOpacity="0.5" />
          </g>
        )}
        {project.motif === 'vision' && (
          <g fill="none" stroke={a}>
            <rect x="204" y="56" width="152" height="152" rx="8" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M224 90 h40 v30 h40 M224 150 h60 v30 M300 76 v40 h36 M318 160 h20 v32" strokeWidth="1.6" strokeOpacity="0.5" />
            {[[264, 90], [304, 120], [284, 180], [336, 116], [338, 192]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill={a} fillOpacity="0.6" stroke="none" />
            ))}
            <rect x="290" y="140" width="56" height="44" strokeWidth="2.5" stroke="#ff5a6e" strokeDasharray="6 4" />
            <path d="M196 48 h18 M196 48 v18 M364 48 h-18 M364 48 v18 M196 216 h18 M196 216 v-18 M364 216 h-18 M364 216 v-18" strokeWidth="3" />
          </g>
        )}
        {project.motif === 'logs' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i} strokeOpacity={0.3 + (i % 3) * 0.2}>
                <line x1="196" x2="222" y1={64 + i * 18} y2={64 + i * 18} strokeWidth="3" strokeLinecap="round" />
                <line x1="232" x2={300 + (i % 3) * 22} y1={64 + i * 18} y2={64 + i * 18} strokeWidth="3" strokeLinecap="round" />
              </g>
            ))}
            <rect x="244" y="94" width="58" height="16" rx="4" fill={a} fillOpacity="0.3" strokeWidth="1.6" />
            <rect x="232" y="148" width="40" height="16" rx="4" fill={a} fillOpacity="0.3" strokeWidth="1.6" />
            <path d="M268 196 h88 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-70 l-14 10 v-10 h-4 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 Z" strokeWidth="2" strokeOpacity="0.85" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={296 + i * 14} cy="216" r="3" fill={a} stroke="none" />
            ))}
          </g>
        )}
        {project.motif === 'pulse' && (
          <g fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <path d="M190 130 h44 l12 -36 l18 76 l16 -58 l10 18 h96" strokeWidth="3" strokeOpacity="0.9" />
            <g transform="translate(232 180)" strokeWidth="3" strokeOpacity="0.7">
              <path d="M0 14 h96" />
              <rect x="10" y="0" width="10" height="28" rx="2" />
              <rect x="76" y="0" width="10" height="28" rx="2" />
              <rect x="-2" y="6" width="8" height="16" rx="2" />
              <rect x="90" y="6" width="8" height="16" rx="2" />
            </g>
            <rect x="300" y="52" width="66" height="34" rx="10" strokeWidth="1.6" strokeOpacity="0.6" />
            <path d="M312 66 h40 M312 74 h24" strokeWidth="2" strokeOpacity="0.5" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M5 4v24M19 4v24M5 16h14" fill="none" stroke="#e5132b" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
