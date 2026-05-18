# Colors
// ─── Primitive Scales ────────────────────────────────────────────────────────

/** Cobalt — Munich '72 / vintage poster blue. Primary brand accent. */
export const cobalt = {
  50:  '#EEF3FB',
  100: '#D4E2F5',
  200: '#A9C4EB',
  300: '#7EA6E0',
  400: '#5382D1',
  500: '#2B5FC1', // DEFAULT — website --cobalt
  600: '#1E4A9E', // website --cobalt-dark
  700: '#16397A',
  800: '#0E2756',
  900: '#071433',
} as const;

/** Red / Hot Pink — retro athletic primary accent. */
export const red = {
  50:  '#FEE8F0',
  100: '#FDC5D9',
  200: '#FA8BB2',
  300: '#F6508B',
  400: '#F02870',
  500: '#E8175D', // DEFAULT — website --red
  600: '#C4104D', // website --red-dark
  700: '#96093B',
  800: '#680628',
  900: '#3A0316',
} as const;

/** Green — Nike patch / grass green. Tertiary accent + success. */
export const green = {
  50:  '#E9F5EC',
  100: '#C8E6CF',
  200: '#A2D4AC',
  300: '#75C088',
  400: '#4EAD66',
  500: '#2E7D45', // DEFAULT — website --green
  600: '#236435',
  700: '#1A4C28',
  800: '#11331A',
  900: '#081A0D',
} as const;

/**
 * Neutral — warm ink-to-cream scale.
 * Anchored to the website's cream/charcoal/dark system.
 */
export const neutral = {
  50:  '#F5F1E6', // website --off-white
  100: '#F0ECE0', // website --cream
  200: '#D4CFC4', // website --rule
  300: '#B0AAA0',
  400: '#8A8A94', // website --muted
  500: '#5A5A60', // website --mid
  600: '#3A3A40',
  700: '#1E1E1E', // website --charcoal
  800: '#14161F', // website --ink
  900: '#111114', // website --dark
} as const;

/** Warning / Orange — used in Coach's Box for alerts/caution states. */
export const warning = {
  50:  '#FFF3ED',
  100: '#FFE2CC',
  200: '#FFC499',
  300: '#FFA066',
  400: '#FF8648',
  500: '#FF6B2C',
  600: '#CC5623',
  700: '#99401A',
  800: '#662B11',
  900: '#331508',
} as const;

/** Danger — used for destructive actions and error states. */
export const danger = {
  50:  '#FFEBEE',
  100: '#FFCDD2',
  200: '#EF9A9A',
  300: '#E57373',
  400: '#D44B4B',
  500: '#D43535',
  600: '#C62828',
  700: '#B71C1C',
  800: '#8B1212',
  900: '#5C0808',
} as const;


// ─── Semantic Aliases ─────────────────────────────────────────────────────────

/**
 * Named semantic tokens — use these in components rather than raw scales.
 * Keeps components decoupled from specific hue choices.
 */
export const semantic = {
  // Surfaces
  surface:        neutral[100],  // cream — default light section bg
  surfaceAlt:     neutral[50],   // off-white — alternate section bg
  ink:            neutral[800],  // patent drawing bg
  inkMid:         neutral[900],  // deepest near-black
  chalk:          '#EDE8DC',     // chalk line on dark backgrounds

  // Text
  textPrimary:    neutral[700],  // charcoal — headings
  textSecondary:  neutral[500],  // mid — body copy
  textMuted:      neutral[400],  // muted — labels, captions
  textOnDark:     neutral[100],  // cream — text on dark surfaces

  // Borders
  border:         neutral[200],  // rule — light section dividers
  borderDark:     'rgba(255,255,255,0.10)', // rule on dark backgrounds

  // Accents
  accent:         red[500],      // primary accent — red/hot pink
  accentHover:    red[600],
  brand:          cobalt[500],   // brand blue
  brandHover:     cobalt[600],
  success:        green[500],
  successHover:   green[600],
  warning:        warning[500],
  warningHover:   warning[600],
  danger:         danger[500],
  dangerHover:    danger[600],
} as const;

// ─── Top-level export ─────────────────────────────────────────────────────────

export const colors = {
  cobalt,
  red,
  green,
  neutral,
  warning,
  danger,
  semantic,
} as const;


/**
 * @one-twelve/brand — tokens.css
 *
 * Tailwind v4 @theme block. This is the CSS source of truth for all brand
 * color tokens. Import this file in app-level CSS after @import "tailwindcss".
 *
 * Usage:
 *   @import "@one-twelve/brand/tokens.css";
 */

@theme {
  /* ── Cobalt ──────────────────────────────────────────────────────────────── */
  --color-cobalt-50:  #EEF3FB;
  --color-cobalt-100: #D4E2F5;
  --color-cobalt-200: #A9C4EB;
  --color-cobalt-300: #7EA6E0;
  --color-cobalt-400: #5382D1;
  --color-cobalt-500: #2B5FC1;
  --color-cobalt-600: #1E4A9E;
  --color-cobalt-700: #16397A;
  --color-cobalt-800: #0E2756;
  --color-cobalt-900: #071433;

  /* ── Red / Hot Pink ──────────────────────────────────────────────────────── */
  --color-red-50:  #FEE8F0;
  --color-red-100: #FDC5D9;
  --color-red-200: #FA8BB2;
  --color-red-300: #F6508B;
  --color-red-400: #F02870;
  --color-red-500: #E8175D;
  --color-red-600: #C4104D;
  --color-red-700: #96093B;
  --color-red-800: #680628;
  --color-red-900: #3A0316;

  /* ── Green ───────────────────────────────────────────────────────────────── */
  --color-green-50:  #E9F5EC;
  --color-green-100: #C8E6CF;
  --color-green-200: #A2D4AC;
  --color-green-300: #75C088;
  --color-green-400: #4EAD66;
  --color-green-500: #2E7D45;
  --color-green-600: #236435;
  --color-green-700: #1A4C28;
  --color-green-800: #11331A;
  --color-green-900: #081A0D;

  /* ── Neutral — warm ink-to-cream ─────────────────────────────────────────── */
  --color-neutral-50:  #F5F1E6;
  --color-neutral-100: #F0ECE0;
  --color-neutral-200: #D4CFC4;
  --color-neutral-300: #B0AAA0;
  --color-neutral-400: #8A8A94;
  --color-neutral-500: #5A5A60;
  --color-neutral-600: #3A3A40;
  --color-neutral-700: #1E1E1E;
  --color-neutral-800: #14161F;
  --color-neutral-900: #111114;

  /* ── Warning ─────────────────────────────────────────────────────────────── */
  --color-warning-50:  #FFF3ED;
  --color-warning-100: #FFE2CC;
  --color-warning-200: #FFC499;
  --color-warning-300: #FFA066;
  --color-warning-400: #FF8648;
  --color-warning-500: #FF6B2C;
  --color-warning-600: #CC5623;
  --color-warning-700: #99401A;
  --color-warning-800: #662B11;
  --color-warning-900: #331508;

  /* ── Danger ──────────────────────────────────────────────────────────────── */
  --color-danger-50:  #FFEBEE;
  --color-danger-100: #FFCDD2;
  --color-danger-200: #EF9A9A;
  --color-danger-300: #E57373;
  --color-danger-400: #D44B4B;
  --color-danger-500: #D43535;
  --color-danger-600: #C62828;
  --color-danger-700: #B71C1C;
  --color-danger-800: #8B1212;
  --color-danger-900: #5C0808;

  /* ────────────────────────────────────────────────────────────────────────── */
  /* ── Semantic Aliases — reference scale vars, never repeat hex ──────────── */
  /* ────────────────────────────────────────────────────────────────────────── */

  /* Primary — cobalt interactive (buttons, links, focus rings) */
  --color-primary:                    var(--color-cobalt-600);
  --color-primary-hover:              var(--color-cobalt-700);
  --color-primary-subtle:             var(--color-cobalt-50);
  --color-primary-subtle-foreground:  var(--color-cobalt-700);
  --color-primary-foreground:         var(--color-neutral-50);
  --color-primary-ring:               var(--color-cobalt-500);

  /* Accent — red/hot-pink */
  --color-accent:                     var(--color-red-500);
  --color-accent-hover:               var(--color-red-600);
  --color-accent-subtle:              var(--color-red-50);
  --color-accent-foreground:          var(--color-neutral-50);

  /* Success — green */
  --color-success:                    var(--color-green-500);
  --color-success-hover:              var(--color-green-600);
  --color-success-subtle:             var(--color-green-50);
  --color-success-foreground:         var(--color-neutral-50);

  /* Warning */
  --color-warning:                    var(--color-warning-500);
  --color-warning-hover:              var(--color-warning-600);
  --color-warning-subtle:             var(--color-warning-50);
  --color-warning-foreground:         var(--color-neutral-50);

  /* Danger / Destructive */
  --color-danger:                     var(--color-danger-500);
  --color-danger-hover:               var(--color-danger-600);
  --color-danger-subtle:              var(--color-danger-50);
  --color-danger-foreground:          var(--color-neutral-50);

  /* Surfaces & layout */
  --color-background:                 var(--color-neutral-100);
  --color-foreground:                 var(--color-neutral-700);
  --color-border:                     var(--color-neutral-200);
  --color-muted:                      var(--color-neutral-50);
  --color-muted-foreground:           var(--color-neutral-400);

  /* Ink / dark surfaces */
  --color-ink:                        var(--color-neutral-800);
  --color-ink-mid:                    #1E2130; /* no scale equivalent — unique dark panel bg */
  --color-ink-foreground:             var(--color-neutral-100);
  --color-chalk:                      #EDE8DC; /* no scale equivalent — warm white on dark  */
}


# Typography

    For main headers --font-family-display: 'Fugaz One', Impact, sans-serif;
    For body copy --font-family-body:    'Lora', Georgia, serif;For labels and captions --font-family-ui:      'Work Sans', system-ui, sans-serif;
    For the 112 logo mark only!! --font-family-brush:   'Nanum Brush Script', cursive;

# Spacing & Radius
## Are your corners sharp, slightly rounded, or pill-shaped? (e.g. 0.25rem, 0.5rem, 9999px)

    Slightly rounded corners with thin/fine lines

## Any spacing preferences, or stick with the 4px base scale (0.25rem increments)?

    User a rem scale with 1 rem = 16 px

# Shadows & Opacity

## Do you use shadows? If so, subtle or pronounced?
    Subtle shadows

## Default disabled opacity — 0.5 work, or something else?
    Use a standard disabled setting