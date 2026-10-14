export default function SectionHeading({ eyebrow, title, children, onDark = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-xs font-bold tracking-[0.16em] ${onDark ? 'text-amber' : 'text-steel'}`}>
          <span aria-hidden="true" className="h-0.5 w-8 bg-amber" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${onDark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {children && <p className={`mt-4 text-base sm:text-lg ${onDark ? 'text-white/75' : 'text-ink/75'}`}>{children}</p>}
    </div>
  )
}
