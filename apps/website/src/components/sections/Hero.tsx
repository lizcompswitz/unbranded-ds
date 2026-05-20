import React from 'react';
import { Container } from '@unbranded-ds/react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center bg-foreground"
      style={{ minHeight: '90vh' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)',
        }}
      />

      <Container className="relative flex flex-col gap-8" style={{ paddingBlock: 'clamp(5rem, 12vw, 9rem)' }}>
        {/* Eyebrow */}
        <span className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Track &amp; Field
        </span>

        {/* Headline */}
        <h1 className="font-body italic font-bold leading-[1.05] text-background max-w-3xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          one twelve
        </h1>

        {/* Body */}
        <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
          Building tools, products, and experiences for track &amp; field. We believe the sport
          deserves better — for athletes competing, coaches building programs, parents
          supporting them, and communities keeping it alive.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="primary" size="lg" href="/track-and-field/coaches-box">
            Explore Coaches Box
          </Button>
          <Button variant="outline" size="lg" href="/journals" className="border-background text-background hover:bg-white/10">
            Shop Journals
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
