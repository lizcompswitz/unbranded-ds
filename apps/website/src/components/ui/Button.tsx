'use client';

/**
 * Button — thin wrapper around @unbranded-ds/react Button.
 * Maps the website's legacy variant names to DS variant names
 * so all existing call sites work without changes.
 */

import React from 'react';
import { Button as DSButton } from '@unbranded-ds/react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  variant?: 'primary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'default';
  href?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

// Map website variant names → DS variant names
const variantMap = {
  primary: 'default',
  accent:  'default',
  ghost:   'ghost',
  outline: 'outline',
} as const;

// Map website size names → DS size names
const sizeMap = {
  sm:      'sm',
  md:      'default',
  lg:      'lg',
  default: 'default',
} as const;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}) => {
  const dsVariant = variantMap[variant];
  const dsSize = sizeMap[size];

  if (href) {
    const linkClass = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all',
      'bg-primary text-primary-foreground hover:bg-primary/80',
      dsSize === 'sm' && 'h-8 px-2.5',
      dsSize === 'default' && 'h-9 px-2.5',
      dsSize === 'lg' && 'h-10 px-2.5',
      className,
    );
    if (href.startsWith('http')) {
      return <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <NextLink href={href} className={linkClass}>{children}</NextLink>;
  }

  return (
    <DSButton variant={dsVariant} size={dsSize} className={className} {...props}>
      {children}
    </DSButton>
  );
};

export default Button;
