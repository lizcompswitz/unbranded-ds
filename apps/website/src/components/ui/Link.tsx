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
  default: 'text-primary hover:text-primary/80 underline-offset-2 hover:underline transition-colors',
  nav:     'text-foreground hover:text-primary transition-colors',
  subtle:  'text-muted-foreground hover:text-foreground transition-colors',
};

const Link: React.FC<LinkProps> = ({ href, children, className = '', variant = 'default', onClick }) => {
  return (
    <NextLink href={href} className={`${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default Link;