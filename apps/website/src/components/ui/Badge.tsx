import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:  'bg-muted text-foreground',
  accent:   'bg-accent/10 text-accent',
  primary:  'bg-primary/10 text-primary',
  success:  'bg-success/10 text-success',
  warning:  'bg-warning/10 text-warning',
  danger:   'bg-destructive/10 text-destructive',
  outline:  'border border-current bg-transparent text-foreground',
};

const Badge: React.FC<BadgeProps> = ({ label, variant = 'default', className }) => {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold uppercase tracking-widest',
      variantStyles[variant],
      className
    )}>
      {label}
    </span>
  );
};

export default Badge;
