import React from 'react';
import Button from '../../components/ui/Button';
import { Container, Section } from '@unbranded-ds/react';

export const metadata = {
  title: 'About — One Twelve',
  description: 'The story behind One Twelve — who Liz is, why the name 112, and what drives the work.',
};

export default function AboutPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <Section className="bg-foreground text-background">
        <Container className="flex flex-col gap-6">
          <span className="font-brush text-5xl text-accent">112</span>
          <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            About One Twelve
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
            One Twelve is built by Liz — a track and field athlete, coach, and builder who
            believes the sport deserves better tools, better products, and better experiences.
          </p>
        </Container>
      </Section>

      {/* The Name */}
      <Section className="border-b border-border">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
              The Name
            </span>
            <h2 className="font-display text-4xl text-foreground">Why 112?</h2>
            <p className="font-body text-foreground leading-relaxed">
              It started as a nickname — a misread version of &ldquo;Liz&rdquo; that looked like 112.
              What began as a joke became something that fit. Track and field is a sport built on
              numbers: marks, meters, reps, attempts, standards, splits, seasons.
            </p>
            <p className="font-body text-foreground leading-relaxed">
              112 is a number that looked like a name. One Twelve is a name that became a company.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-brush leading-none text-border" style={{ fontSize: 'clamp(6rem, 16vw, 9rem)' }}>
              112
            </span>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="bg-muted">
        <Container>
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Mission
          </span>
          <h2 className="font-display text-4xl text-foreground mt-2 mb-6">
            Track &amp; field deserves better
          </h2>
          <p className="font-body text-foreground leading-relaxed text-lg max-w-2xl">
            Not just for the athletes competing — but for the coaches building programs,
            the parents supporting them, and the communities keeping the sport alive.
            Every product and tool at One Twelve starts from that belief.
          </p>
        </Container>
      </Section>

      {/* Contact */}
      <Section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">Want to connect?</h3>
            <p className="text-muted-foreground mt-1">
              Reach out at{' '}
              <a href="mailto:liz@onetwelve.com" className="text-primary hover:underline">
                liz@onetwelve.com
              </a>
            </p>
          </div>
          <Button variant="primary" size="lg">Say Hello</Button>
        </Container>
      </Section>

    </div>
  );
}
