import * as React from "react"
import NextLink from 'next/link';
import { Card, CardTitle, CardDescription } from "@unbranded-ds/react"
import { cn } from "@/lib/utils"

// ─── App-specific ProductCard (uses monorepo Card primitives) ─────────────

interface ProductCardProps {
  title: string;
  description: string;
  badge?: string;
  linkUrl?: string;
  linkLabel?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  badge,
  linkUrl,
  linkLabel,
  className,
}) => {
  return (
    <Card style={{ padding: '1.5rem' }} className={cn('flex flex-col gap-0', className)}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <CardTitle className="font-display text-foreground text-xl leading-snug">
          {title}
        </CardTitle>
        {badge && (
          <span className="shrink-0 inline-block px-2.5 py-0.5 rounded-sm text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary">
            {badge}
          </span>
        )}
      </div>

      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </CardDescription>

      {linkUrl && linkLabel && (
        <div className="mt-6">
          <NextLink
            href={linkUrl}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {linkLabel} →
          </NextLink>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
