/**
 * Built-in technical illustrations used as image fallbacks.
 * They are generic instrument drawings, not the business's own inventory.
 */
const tones = {
  dark: { body: '#DCE3EA', shade: '#8FB0D0', detail: '#174A78', accent: '#F5A623', line: 'rgba(255,255,255,0.35)' },
  light: { body: '#0B223D', shade: '#174A78', detail: '#DCE3EA', accent: '#F5A623', line: '#94A3B8' },
}

function Tripod({ c, cx = 200, top = 300, spread = 100, ground = 424 }) {
  return (
    <g strokeLinecap="round">
      <g stroke={c.shade} strokeWidth="6">
        <line x1={cx - 8} y1={top + 6} x2={cx - spread} y2={ground} />
        <line x1={cx + 8} y1={top + 6} x2={cx + spread} y2={ground} />
        <line x1={cx} y1={top + 6} x2={cx + 10} y2={ground + 8} />
      </g>
      <rect x={cx - 34} y={top} width="68" height="10" rx="2" fill={c.body} />
      <g stroke={c.accent} strokeWidth="6">
        <line x1={cx - spread} y1={ground - 2} x2={cx - spread - 2} y2={ground + 4} />
        <line x1={cx + spread} y1={ground - 2} x2={cx + spread + 2} y2={ground + 4} />
      </g>
    </g>
  )
}

function Instrument({ c }) {
  return (
    <g>
      <rect x="168" y="286" width="64" height="14" rx="2" fill={c.shade} />
      <rect x="174" y="236" width="52" height="52" rx="4" fill={c.body} />
      <rect x="158" y="150" width="22" height="94" rx="4" fill={c.body} />
      <rect x="220" y="150" width="22" height="94" rx="4" fill={c.body} />
      <rect x="158" y="222" width="84" height="22" rx="4" fill={c.body} />
      <path d="M170 150c0-34 60-34 60 0" fill="none" stroke={c.body} strokeWidth="8" strokeLinecap="round" />
      <rect x="132" y="158" width="128" height="26" rx="7" fill={c.shade} />
      <rect x="118" y="162" width="16" height="18" rx="3" fill={c.body} />
      <circle cx="262" cy="171" r="15" fill={c.body} />
      <circle cx="262" cy="171" r="8" fill={c.detail} />
      <circle cx="262" cy="171" r="3" fill={c.accent} />
      <rect x="182" y="196" width="36" height="22" rx="3" fill={c.detail} />
      <rect x="187" y="201" width="26" height="3" fill={c.accent} />
      <rect x="187" y="208" width="18" height="3" fill={c.shade} />
      <circle cx="190" cy="266" r="5" fill={c.detail} />
      <circle cx="210" cy="266" r="5" fill={c.detail} />
    </g>
  )
}

export function TotalStationArt({ tone = 'light', scene = false, className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      {scene && (
        <g>
          <line x1="0" y1="428" x2="400" y2="428" stroke={c.line} strokeWidth="2" />
          {Array.from({ length: 16 }, (_, i) => (
            <line key={i} x1={i * 26 + 4} y1="428" x2={i * 26 - 6} y2="440" stroke={c.line} strokeWidth="1.5" />
          ))}
          <line x1="350" y1="428" x2="350" y2="196" stroke={c.shade} strokeWidth="5" strokeLinecap="round" />
          <circle cx="350" cy="171" r="14" fill="none" stroke={c.accent} strokeWidth="4" />
          <circle cx="350" cy="171" r="4" fill={c.accent} />
          <line className="sight-line" x1="280" y1="171" x2="332" y2="171" stroke={c.accent} strokeWidth="2.5" />
          <g stroke={c.line} strokeWidth="1.5">
            <line x1="200" y1="404" x2="350" y2="404" />
            <line x1="200" y1="396" x2="200" y2="412" />
            <line x1="350" y1="396" x2="350" y2="412" />
          </g>
        </g>
      )}
      <Tripod c={c} />
      <Instrument c={c} />
    </svg>
  )
}

export function LevelArt({ tone = 'light', className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      <Tripod c={c} top={286} spread={96} />
      <rect x="150" y="268" width="100" height="14" rx="2" fill={c.shade} />
      <ellipse cx="200" cy="256" rx="54" ry="12" fill={c.body} />
      <rect x="176" y="226" width="48" height="30" rx="4" fill={c.body} />
      <rect x="112" y="186" width="160" height="38" rx="12" fill={c.body} />
      <rect x="268" y="180" width="22" height="50" rx="5" fill={c.shade} />
      <circle cx="279" cy="205" r="9" fill={c.detail} />
      <circle cx="279" cy="205" r="3.5" fill={c.accent} />
      <rect x="96" y="194" width="20" height="22" rx="4" fill={c.shade} />
      <circle cx="198" cy="180" r="10" fill={c.detail} stroke={c.body} strokeWidth="3" />
      <circle cx="198" cy="180" r="3" fill={c.accent} />
      <rect x="186" y="196" width="26" height="6" rx="3" fill={c.accent} />
      <line x1="296" y1="205" x2="392" y2="205" stroke={c.accent} strokeWidth="2.5" strokeDasharray="8 6" />
    </svg>
  )
}

export function RotaryLaserArt({ tone = 'light', className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      <Tripod c={c} top={330} spread={84} />
      <rect x="166" y="248" width="68" height="82" rx="10" fill={c.body} />
      <rect x="180" y="214" width="40" height="38" rx="8" fill={c.shade} />
      <rect x="190" y="194" width="20" height="24" rx="4" fill={c.body} />
      <rect x="186" y="198" width="28" height="9" rx="2" fill={c.accent} />
      <rect x="180" y="270" width="40" height="24" rx="3" fill={c.detail} />
      <circle cx="200" cy="282" r="5" fill={c.accent} />
      <path d="M176 248c0-26 48-26 48 0" fill="none" stroke={c.body} strokeWidth="6" strokeLinecap="round" />
      <g stroke={c.accent} strokeWidth="3" strokeDasharray="10 7" strokeLinecap="round">
        <line x1="8" y1="202" x2="184" y2="202" />
        <line x1="216" y1="202" x2="392" y2="202" />
      </g>
      <g stroke={c.line} strokeWidth="2">
        <line x1="14" y1="150" x2="14" y2="330" />
        <line x1="386" y1="150" x2="386" y2="330" />
      </g>
      <circle cx="14" cy="202" r="5" fill={c.accent} />
      <circle cx="386" cy="202" r="5" fill={c.accent} />
    </svg>
  )
}

export function DistanceMeterArt({ tone = 'light', className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      <g stroke={c.line} strokeWidth="2">
        <line x1="80" y1="48" x2="320" y2="48" />
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={80 + i * 20} y1="48" x2={72 + i * 20} y2="34" />
        ))}
      </g>
      <line className="sight-line" x1="200" y1="120" x2="200" y2="54" stroke={c.accent} strokeWidth="3" />
      <circle cx="200" cy="48" r="5" fill={c.accent} />
      <g transform="rotate(-6 200 270)">
        <rect x="150" y="116" width="100" height="270" rx="16" fill={c.body} />
        <rect x="186" y="104" width="28" height="18" rx="4" fill={c.shade} />
        <circle cx="200" cy="113" r="4" fill={c.accent} />
        <rect x="168" y="146" width="64" height="62" rx="5" fill={c.detail} />
        <rect x="176" y="156" width="48" height="8" rx="2" fill={c.accent} />
        <rect x="176" y="172" width="32" height="5" rx="2" fill={c.shade} />
        <rect x="176" y="184" width="40" height="5" rx="2" fill={c.shade} />
        <circle cx="200" cy="244" r="16" fill={c.shade} />
        <circle cx="200" cy="244" r="6" fill={c.accent} />
        <circle cx="172" cy="290" r="9" fill={c.shade} />
        <circle cx="228" cy="290" r="9" fill={c.shade} />
        <rect x="176" y="322" width="48" height="10" rx="5" fill={c.shade} />
      </g>
    </svg>
  )
}

export function RepairBenchArt({ tone = 'light', className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      <rect x="20" y="352" width="360" height="18" rx="3" fill={c.shade} />
      <rect x="44" y="370" width="14" height="60" fill={c.shade} />
      <rect x="342" y="370" width="14" height="60" fill={c.shade} />
      <g transform="translate(-34 78) scale(0.9)">
        <Instrument c={c} />
        <rect x="150" y="296" width="100" height="14" rx="2" fill={c.body} />
      </g>
      <circle cx="292" cy="210" r="52" fill="none" stroke={c.accent} strokeWidth="9" />
      <circle cx="292" cy="210" r="43" fill={c.accent} opacity="0.14" />
      <line x1="330" y1="248" x2="372" y2="300" stroke={c.accent} strokeWidth="12" strokeLinecap="round" />
      <g transform="rotate(-24 290 330)">
        <rect x="236" y="322" width="110" height="12" rx="3" fill={c.body} />
        <rect x="226" y="316" width="22" height="24" rx="4" fill={c.accent} />
      </g>
      <g stroke={c.line} strokeWidth="2">
        <circle cx="76" cy="340" r="7" fill="none" />
        <line x1="72" y1="337" x2="80" y2="343" />
      </g>
    </svg>
  )
}

export function SiteArt({ tone = 'light', className = '' }) {
  const c = tones[tone]
  return (
    <svg viewBox="0 0 400 440" className={className} aria-hidden="true" focusable="false">
      <line x1="0" y1="428" x2="400" y2="428" stroke={c.line} strokeWidth="2" />
      <g stroke={c.shade} strokeWidth="6" strokeLinecap="square" fill="none">
        {[40, 120, 200].map((x) => (
          <line key={x} x1={x} y1="428" x2={x} y2="130" />
        ))}
        {[130, 220, 320].map((y) => (
          <line key={y} x1="40" y1={y} x2="200" y2={y} />
        ))}
      </g>
      <g stroke={c.line} strokeWidth="2" fill="none">
        <line x1="40" y1="320" x2="120" y2="220" />
        <line x1="120" y1="320" x2="200" y2="220" />
        <line x1="40" y1="220" x2="120" y2="130" />
      </g>
      <rect x="40" y="224" width="160" height="94" fill={c.accent} opacity="0.1" />
      <g transform="translate(150 86) scale(0.78)">
        <Tripod c={c} />
        <Instrument c={c} />
      </g>
      <line className="sight-line" x1="236" y1="214" x2="204" y2="214" stroke={c.accent} strokeWidth="2.5" />
    </svg>
  )
}
