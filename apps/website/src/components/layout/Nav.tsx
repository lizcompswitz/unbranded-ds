'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';

const navLinks = [
  {
    label: 'T&F Tools',
    href: '/track-and-field',
    children: [
      { label: 'Coaches Box', href: '/track-and-field/coaches-box' },
      { label: 'DepartSmart', href: '/track-and-field/departsmart' },
    ],
  },
  { label: 'Journals', href: '/journals' },
  { label: 'Coaching & Camps', href: '/coaching-and-camps' },
  { label: 'About', href: '/about' },
];

const Nav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 bg-[var(--color-background)] border-b border-[var(--color-border)]"
      style={{ height: 'var(--nav-h)' }}
    >
      <Container className="h-full flex items-center justify-between">

        {/* Wordmark */}
        <NextLink
          href="/"
          className="font-brush text-3xl leading-none text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
        >
          112
        </NextLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-[var(--font-ui)] text-sm font-medium">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button className="flex items-center gap-1 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                  {link.label}
                  <ChevronDown size={13} className="opacity-60" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--color-background)] border border-[var(--color-border)] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {link.children.map((child) => (
                    <NextLink
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors first:rounded-t-md last:rounded-b-md"
                    >
                      {child.label}
                    </NextLink>
                  ))}
                </div>
              </div>
            ) : (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </NextLink>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--color-foreground)] cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-md">
          <Container className="py-4 flex flex-col">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <span className="block px-2 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)] font-[var(--font-ui)]">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <NextLink
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-sm font-[var(--font-ui)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {child.label}
                    </NextLink>
                  ))}
                </div>
              ) : (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium font-[var(--font-ui)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </NextLink>
              )
            )}
          </Container>
        </div>
      )}
    </header>
  );
};

export default Nav;
