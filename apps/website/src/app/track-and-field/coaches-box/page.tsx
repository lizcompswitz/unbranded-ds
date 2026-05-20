import React from 'react';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import Card from '../../../components/ui/Card';
import { Container, Section } from '@unbranded-ds/react';

export const metadata = {
  title: 'Coaches Box — One Twelve',
  description: 'A digital app for track and field coaches to build training programs, track athlete progress, and define program goals.',
};

const features = [
  { label: 'Program Builder', description: "Build and evolve training programs tailored to your team's events and season phase." },
  { label: 'Athlete Progress Tracking', description: 'Log performances, track trends, and see who is responding to training.' },
  { label: 'Goal Management', description: 'Set program-level and athlete-level goals — then track them throughout the season.' },
  { label: 'All in One Place', description: 'No more juggling spreadsheets, notes apps, and memory. Everything lives in Coaches Box.' },
];

export default function CoachesBoxPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <Section className="bg-foreground text-background">
        <Container className="flex flex-col gap-6">
          <Badge label="App · T&F Tools" variant="primary" />
          <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Coaches Box
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            A digital home for track and field coaches. Build programs, track athletes,
            set goals, and evolve your system — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" size="lg">Get Early Access</Button>
            <Button variant="ghost" size="lg" className="text-background">Learn More</Button>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Features
          </span>
          <h2 className="font-display text-4xl text-foreground mt-2 mb-12">
            Everything a coach needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <Card
                key={f.label}
                title={f.label}
                description={f.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-primary/10" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">Built for coaches who take their craft seriously.</h3>
            <p className="text-muted-foreground mt-1">Join the waitlist for early access.</p>
          </div>
          <Button variant="primary" size="lg">Join the Waitlist</Button>
        </Container>
      </Section>

    </div>
  );
}
