import React from 'react';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Container from '../../components/ui/Container';

export const metadata = {
  title: 'Pole Vault Logbook — One Twelve',
  description: 'A custom training journal for pole vaulters. Track mechanics, set goals, and reflect on every session.',
};

const features = [
  { label: 'Vault Mechanics Tracking', description: 'Log every detail — grip height, approach, plant, takeoff — and see patterns over time.' },
  { label: 'Goal Setting Pages', description: 'Define season goals and track progress meet by meet, week by week.' },
  { label: 'Performance Reflection', description: 'Dedicated reflection prompts after competitions and training blocks.' },
  { label: 'Meet Log', description: 'Record meet results, conditions, and notes in one consistent format.' },
];

export default function JournalsPage() {
  return (
    <div className="bg-[var(--color-background)]">

      {/* Hero */}
      <section className="bg-[var(--color-ink)] text-[var(--color-chalk)]">
        <Container style={{ paddingBlock: 'var(--section-py)' }} className="flex flex-col gap-6">
          <Badge label="Journal · Published 2020" variant="accent" />
          <h1 className="font-[var(--font-display)] leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Pole Vault Logbook
          </h1>
          <p className="font-[var(--font-body)] text-lg text-[var(--color-neutral-300)] max-w-xl leading-relaxed">
            The only training journal built specifically for pole vaulters. Track every mechanical
            detail, set meaningful goals, and build the mental record of your career.
          </p>
          <div className="pt-2">
            <Button variant="accent" size="lg">Buy the Logbook</Button>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section style={{ paddingBlock: 'var(--section-py)' }}>
        <Container>
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            What&apos;s Inside
          </span>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-ink)] mt-2 mb-12">
            Built for the vault, by vaulters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col gap-2 p-6 border border-[var(--color-border)] rounded-sm">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">{f.label}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--color-primary-subtle)]" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-[var(--font-display)] text-3xl text-[var(--color-ink)]">Ready to start logging?</h3>
            <p className="text-[var(--color-muted-foreground)] mt-1">The Pole Vault Logbook ships worldwide.</p>
          </div>
          <Button variant="primary" size="lg">Order Now</Button>
        </Container>
      </section>

    </div>
  );
}
