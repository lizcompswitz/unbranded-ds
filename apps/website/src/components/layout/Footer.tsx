import React from 'react';
import NextLink from 'next/link';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <Container style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <span className="font-brush text-4xl text-background">112</span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building tools, products, and experiences for track & field athletes, coaches, and communities.
            </p>
          </div>

          {/* T&F Tools */}
          <div className="flex flex-col gap-3">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              T&F Tools
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: '/track-and-field/coaches-box', label: 'Coaches Box' },
                { href: '/track-and-field/departsmart', label: 'DepartSmart' },
              ].map((item) => (
                <li key={item.href}>
                  <NextLink href={item.href} className="text-muted-foreground hover:text-background transition-colors">
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Journals */}
          <div className="flex flex-col gap-3">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Journals
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: '/journals', label: 'PV Logbook' },
              ].map((item) => (
                <li key={item.href}>
                  <NextLink href={item.href} className="text-muted-foreground hover:text-background transition-colors">
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-ui text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: '/about', label: 'About' },
                { href: '/coaching-and-camps', label: 'Coaching & Camps' },
              ].map((item) => (
                <li key={item.href}>
                  <NextLink href={item.href} className="text-muted-foreground hover:text-background transition-colors">
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} One Twelve. All rights reserved.
          </p>
          <NextLink href="#top" className="text-xs text-muted-foreground hover:text-background transition-colors">
            Back to top ↑
          </NextLink>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
