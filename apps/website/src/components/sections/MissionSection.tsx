import React from 'react';
import NextLink from 'next/link';
import { Container, Section } from '@unbranded-ds/react';

const MissionSection: React.FC = () => {
  return (
    <Section className="bg-foreground">
      <Container>
        <div className="max-w-2xl flex flex-col gap-6">
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Why 112.
          </span>
          <h2
            className="font-display leading-none text-background"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Built by a coach,<br />for coaches.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            One twelve started as a number on a pole vault standard. It became a philosophy —
            precise, purposeful, always improving. Every tool and journal we build carries
            that standard.
          </p>
          <div className="pt-2">
            <NextLink
              href="/about"
              className="inline-flex items-center gap-2 border border-background text-background px-6 py-3 font-ui text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Our story →
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MissionSection;
