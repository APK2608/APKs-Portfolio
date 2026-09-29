interface AssetPlaceholderProps {
  type: 'profile' | 'project' | 'certificate' | 'hero' | 'icon';
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function AssetPlaceholder({
  type,
  label,
  className = '',
  aspectRatio,
}: AssetPlaceholderProps) {
  const icons = {
    profile: '👤',
    project: '🖥️',
    certificate: '📜',
    hero: '⚡',
    icon: '🔗',
  };

  return (
    <div
      className={`asset-placeholder rounded-lg ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <span className="text-3xl opacity-40">{icons[type]}</span>
      <span
        className="font-display text-[10px] tracking-widest opacity-40"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}
