import React from 'react';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import Container from '../../../components/ui/Container';

export const metadata = {
  title: 'DepartSmart — One Twelve',
  description: 'A free tool that helps track and field teams plan meet logistics — heat assignments, departure times, and athlete schedules.',
};

const features = [
  { label: 'Departure Planning', description: 'Calculate exactly when athletes need to leave the warm-up area to make it to the line on time.' },
  { label: 'Heat Assignments', description: 'Organize athletes by event, heat, and flight — built around how meets actually work.' },
  { label: 'Athlete Schedules', description: 'Generate clear, individual schedules so every athlete knows where to be and when.' },
  { label: 'Free to Use', description: 'No subscription. No paywall. DepartSmart is free for any team, any size.' },
];

export default function DepartSmartPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="bg-foreground text-background">
        <Container style={{ paddingBlock: 'var(--section-py)' }} className="flex flex-col gap-6">
          <Badge label="Free Tool · T&F Tools" variant="accent" />
          <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            DepartSmart
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
            Meet-day logistics, simplified. DepartSmart helps track and field teams
            plan departures, organize heats, and build athlete schedules — for free.
          </p>
          <div className="pt-2">
            <Button variant="accent" size="lg">Use DepartSmart Free</Button>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section style={{ paddingBlock: 'var(--section-py)' }}>
        <Container>
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            What It Does
          </span>
          <h2 className="font-display text-4xl text-foreground mt-2 mb-12">
            Less chaos, more racing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col gap-2 p-6 border border-border rounded-sm">
                <h3 className="font-display text-xl text-foreground">{f.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Free CTA */}
      <section className="bg-accent/10" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl text-foreground">It&apos;s free. No catch.</h3>
            <p className="text-muted-foreground mt-1">We built it because we needed it. Now it&apos;s yours too.</p>
          </div>
          <Button variant="accent" size="lg">Launch the Tool</Button>
        </Container>
      </section>

    </div>
  );
}
