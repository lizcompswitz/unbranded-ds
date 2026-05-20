import React from 'react';
import { Container, Section } from '@unbranded-ds/react';
import Card from '../ui/Card';

const productCategories = [
  {
    title: 'Pole Vault Logbook',
    description:
      'A custom journal for pole vaulters to track every mechanical detail of their vault, capture goals, and reflect on training and performance. Trusted since 2020.',
    badge: 'Journal',
    linkUrl: '/journals',
    linkLabel: 'Shop the Logbook',
  },
  {
    title: 'Coaches Box',
    description:
      'A digital app for track and field coaches to build and evolve training programs, track athlete progress, and define program goals — all in one place.',
    badge: 'App',
    linkUrl: '/track-and-field/coaches-box',
    linkLabel: 'Learn About Coaches Box',
  },
  {
    title: 'DepartSmart',
    description:
      'A free planning tool that helps track and field teams manage meet logistics — heat assignments, departure times, and athlete schedules made simple.',
    badge: 'Free Tool',
    linkUrl: '/track-and-field/departsmart',
    linkLabel: 'Try DepartSmart',
  },
];

const ProductCategorySection: React.FC = () => {
  return (
    <Section className="bg-background border-t border-border">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            What We Build
          </span>
          <h2
            className="font-display text-foreground mt-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}
          >
            Products &amp; Tools
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <Card
              key={cat.title}
              title={cat.title}
              description={cat.description}
              badge={cat.badge}
              linkUrl={cat.linkUrl}
              linkLabel={cat.linkLabel}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProductCategorySection;
