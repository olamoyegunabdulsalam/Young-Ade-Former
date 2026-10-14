import { useState } from 'react'

/**
 * Shows a real photo when `src` is provided and loads successfully.
 * Otherwise renders the supplied illustration so the layout never breaks.
 */
export default function ImageSlot({ src, alt, children, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center ${className}`}>
      {children}
    </div>
  )
}
