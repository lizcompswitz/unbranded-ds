import React from 'react';
import NextLink from 'next/link';
import Container from '../ui/Container';

const MissionSection: React.FC = () => {
  return (
    <section
      className="bg-[var(--color-ink)]"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <Container>
        <div className="max-w-2xl flex flex-col gap-6">
          <span className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Why 112.
          </span>
          <h2
            className="font-[var(--font-display)] leading-none text-[var(--color-chalk)]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Built by a coach,<br />for coaches.
          </h2>
          <p className="font-[var(--font-body)] text-lg text-[var(--color-neutral-300)] leading-relaxed">
            One twelve started as a number on a pole vault standard. It became a philosophy —
            precise, purposeful, always improving. Every tool and journal we build carries
            that standard.
          </p>
          <div className="pt-2">
            <NextLink
              href="/about"
              className="inline-flex items-center gap-2 border border-[var(--color-chalk)] text-[var(--color-chalk)] px-6 py-3 font-[var(--font-ui)] text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Our story →
            </NextLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
