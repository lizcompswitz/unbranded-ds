import React from 'react';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Container from '../../components/ui/Container';

export const metadata = {
  title: 'Coaching & Camps — One Twelve',
  description: 'Private coaching and camps for track and field athletes. Focus on pole vault, skill development, and performance.',
};

const offerings = [
  {
    label: 'Pole Vault Camps',
    description: 'Multi-day camps focused on pole vault technique, mental approach, and building training habits. Open to athletes of all experience levels.',
    badge: 'Camp',
  },
  {
    label: 'Private Coaching',
    description: 'One-on-one coaching tailored to your event and season goals. Available year-round, in-person or remote.',
    badge: 'Private',
  },
  {
    label: 'Program Consulting',
    description: 'Working with coaches and programs to build better systems for athlete development. Curriculum, periodization, and tools.',
    badge: 'Consulting',
  },
];

export default function CoachingAndCampsPage() {
  return (
    <div className="bg-[var(--color-background)]">

      {/* Hero */}
      <section className="bg-[var(--color-ink)] text-[var(--color-chalk)]">
        <Container style={{ paddingBlock: 'var(--section-py)' }} className="flex flex-col gap-6">
          <Badge label="Coaching & Camps" variant="accent" />
          <h1 className="font-[var(--font-display)] leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Coaching &amp; Camps
          </h1>
          <p className="font-[var(--font-body)] text-lg text-[var(--color-neutral-300)] max-w-xl leading-relaxed">
            Skill development, technical coaching, and immersive camps for track and field athletes
            who want to get serious about their craft.
          </p>
          <div className="pt-2">
            <Button variant="accent" size="lg">Get in Touch</Button>
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section style={{ paddingBlock: 'var(--section-py)' }}>
        <Container>
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            What We Offer
          </span>
          <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-ink)] mt-2 mb-12">
            Built around athlete growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((o) => (
              <div key={o.label} className="flex flex-col gap-3 p-6 border border-[var(--color-border)] rounded-sm">
                <Badge label={o.badge} variant="primary" />
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">{o.label}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--color-primary-subtle)]" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-[var(--font-display)] text-3xl text-[var(--color-ink)]">Interested in working together?</h3>
            <p className="text-[var(--color-muted-foreground)] mt-1">
              Reach out at{' '}
              <a href="mailto:liz@onetwelve.com" className="text-[var(--color-primary)] hover:underline">
                liz@onetwelve.com
              </a>
            </p>
          </div>
          <Button variant="primary" size="lg">Contact Liz</Button>
        </Container>
      </section>

    </div>
  );
}
