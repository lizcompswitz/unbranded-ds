import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:  'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]',
  accent:   'bg-[var(--color-red-50)] text-[var(--color-red-600)]',
  primary:  'bg-[var(--color-cobalt-50)] text-[var(--color-cobalt-700)]',
  success:  'bg-[var(--color-green-50)] text-[var(--color-green-700)]',
  warning:  'bg-[var(--color-warning-50)] text-[var(--color-warning-700)]',
  danger:   'bg-[var(--color-red-50)] text-[var(--color-red-700)]',
  outline:  'border border-current bg-transparent text-[var(--color-neutral-700)]',
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
