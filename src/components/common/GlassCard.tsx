import type { PropsWithChildren } from 'react';

export function GlassCard({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`panel overflow-hidden ${className}`.trim()}>{children}</div>;
}
