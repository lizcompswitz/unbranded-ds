import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'nav' | 'subtle';
  onClick?: () => void;
}

const variantStyles: Record<NonNullable<LinkProps['variant']>, string> = {
  default: 'text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] underline-offset-2 hover:underline transition-colors',
  nav:     'text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors',
  subtle:  'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors',
};

const Link: React.FC<LinkProps> = ({ href, children, className = '', variant = 'default', onClick }) => {
  return (
    <NextLink href={href} className={`${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default Link;