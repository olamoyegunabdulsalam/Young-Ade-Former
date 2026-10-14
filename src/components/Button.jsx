const variants = {
  primary: 'bg-amber text-navy hover:bg-amber-dark border-amber hover:border-amber-dark',
  secondary: 'bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white',
  outline: 'bg-white text-navy border-navy/25 hover:border-navy hover:bg-surface',
  dark: 'bg-navy text-white border-navy hover:bg-steel hover:border-steel',
}

export default function Button({ variant = 'primary', href, className = '', children, external = false, ...rest }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border-2 px-5 py-2.5 text-sm font-bold transition-colors duration-150 ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
