interface TagBadgeProps {
  label: string
  color?: string
  className?: string
}

export default function TagBadge({ label, color, className = '' }: TagBadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
      style={{
        backgroundColor: color ? `${color}20` : undefined,
        color: color || undefined,
      }}
    >
      {label}
    </span>
  )
}
