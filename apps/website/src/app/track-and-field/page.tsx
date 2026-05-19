import React from 'react';
import NextLink from 'next/link';
import Container from '../../components/ui/Container';

export const metadata = {
  title: 'T&F Tools — One Twelve',
  description: 'Digital tools built for track and field coaches and athletes — Coaches Box and DepartSmart.',
};

const tools = [
  {
    name: 'Coaches Box',
    tag: 'App',
    href: '/track-and-field/coaches-box',
    description: 'A digital home for track and field coaches. Build programs, track athletes, set goals, and evolve your system — all in one place.',
    cta: 'Get Early Access →',
    accent: 'var(--color-primary)',
    subtle: 'var(--color-primary-subtle)',
  },
  {
    name: 'DepartSmart',
    tag: 'Free Tool',
    href: '/track-and-field/departsmart',
    description: 'Meet-day logistics, simplified. Plan departures, organize heats, and build athlete schedules — free for any team.',
    cta: 'Use It Free →',
    accent: 'var(--color-accent)',
    subtle: 'var(--color-accent-subtle)',
  },
];

export default function TrackAndFieldPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="bg-foreground text-background">
        <Container style={{ paddingBlock: 'var(--section-py)' }} className="flex flex-col gap-6">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            T&amp;F Tools
          </span>
          <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Tools built for the sport
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            Track and field deserves better software. We&apos;re building it — one tool at a time.
          </p>
        </Container>
      </section>

      {/* Tools grid */}
      <section style={{ paddingBlock: 'var(--section-py)' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <NextLink
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-4 p-8 border border-border rounded-sm hover:border-accent transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest font-ui"
                    style={{ color: tool.accent }}
                  >
                    {tool.tag}
                  </span>
                </div>
                <h2 className="font-display text-3xl text-foreground">{tool.name}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{tool.description}</p>
                <span
                  className="text-sm font-semibold font-ui group-hover:underline"
                  style={{ color: tool.accent }}
                >
                  {tool.cta}
                </span>
              </NextLink>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
