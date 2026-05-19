'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import NextLink from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const variantMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
  accent:  'bg-accent text-accent-foreground hover:bg-accent/80',
  ghost:   'bg-transparent text-primary hover:bg-muted',
  outline: 'border border-primary text-primary bg-transparent hover:bg-muted',
};

const sizeMap: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-7 px-3 text-xs',
  md: 'h-9 px-5 text-sm',
  lg: 'h-11 px-7 text-base',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-md cursor-pointer transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'disabled:opacity-disabled disabled:pointer-events-none',
    variantMap[variant],
    sizeMap[size],
    className
  );

  if (href) {
    if (href.startsWith('http')) {
      return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <NextLink href={href} className={classes}>{children}</NextLink>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
