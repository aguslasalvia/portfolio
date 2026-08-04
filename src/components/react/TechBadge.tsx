import { getTechIcon } from '../../utils/techIcons';

// React version of TechBadge.astro — Astro components can't render inside a
// React island, so this shares the same ".tech-badge" class from global.css
// instead of redefining the styles.
export default function TechBadge({ name }: { name: string }) {
  const icon = getTechIcon(name);

  return (
    <span className="tech-badge">
      {icon && (
        <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" style={{ fill: 'currentColor', flexShrink: 0, opacity: 0.7 }}>
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}
