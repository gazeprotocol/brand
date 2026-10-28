// GENERATED from tokens/tokens.json by _build/build_tokens.py — GAZE tokens v0.6.0. Do not edit by hand.
// Colors resolve to CSS variables from tokens.css, so import tokens.css first; light mode = data-theme="light".
/** @type {import('tailwindcss').Config} */
module.exports = {
  "darkMode": [
    "selector",
    "[data-theme=\"dark\"]"
  ],
  "theme": {
    "extend": {
      "colors": {
        "gz": {
          "bg": "var(--gz-bg)",
          "bg-surface": "var(--gz-bg-surface)",
          "bg-elevated": "var(--gz-bg-elevated)",
          "bg-overlay": "var(--gz-bg-overlay)",
          "fg": "var(--gz-fg)",
          "fg-secondary": "var(--gz-fg-secondary)",
          "fg-muted": "var(--gz-fg-muted)",
          "fg-subtle": "var(--gz-fg-subtle)",
          "border": "var(--gz-border)",
          "border-subtle": "var(--gz-border-subtle)",
          "border-chip": "var(--gz-border-chip)",
          "border-strong": "var(--gz-border-strong)",
          "accent": "var(--gz-accent)",
          "accent-hover": "var(--gz-accent-hover)",
          "accent-pressed": "var(--gz-accent-pressed)",
          "accent-fg": "var(--gz-accent-fg)",
          "accent-text": "var(--gz-accent-text)",
          "highlight": "var(--gz-highlight)",
          "success": "var(--gz-success)",
          "success-text": "var(--gz-success-text)",
          "warning": "var(--gz-warning)",
          "warning-text": "var(--gz-warning-text)",
          "critical": "var(--gz-critical)",
          "critical-text": "var(--gz-critical-text)",
          "info": "var(--gz-info)",
          "afterimage": "var(--gz-afterimage)",
          "afterimage-text": "var(--gz-afterimage-text)",
          "settled": "var(--gz-settled)",
          "focus": "var(--gz-focus)",
          "selection": "var(--gz-selection)",
          "scrim": "var(--gz-scrim)",
          "obsidian": "var(--gz-obsidian)",
          "blaze": "var(--gz-blaze)",
          "molten": "var(--gz-molten)",
          "pulse": "var(--gz-pulse)",
          "ember-dim": "var(--gz-ember-dim)",
          "ember-glow": "var(--gz-ember-glow)",
          "warm-white": "var(--gz-warm-white)",
          "ink": "var(--gz-ink)",
          "ink-soft": "var(--gz-ink-soft)",
          "surface": "var(--gz-surface)",
          "elevated": "var(--gz-elevated)",
          "overlay": "var(--gz-overlay)",
          "bone": "var(--gz-bone)",
          "ash": "var(--gz-ash)",
          "smoke": "var(--gz-smoke)",
          "soot": "var(--gz-soot)",
          "verdant": "var(--gz-verdant)",
          "verdant-ink": "var(--gz-verdant-ink)",
          "blaze-ink": "var(--gz-blaze-ink)",
          "molten-ink": "var(--gz-molten-ink)",
          "pulse-ink": "var(--gz-pulse-ink)",
          "blaze-hover": "var(--gz-blaze-hover)",
          "ink-muted": "var(--gz-ink-muted)",
          "ink-subtle": "var(--gz-ink-subtle)",
          "paper": "var(--gz-paper)",
          "parchment": "var(--gz-parchment)",
          "afterimage-bright": "var(--gz-afterimage-bright)",
          "afterimage-ink": "var(--gz-afterimage-ink)",
          "blaze-pressed-light": "var(--gz-blaze-pressed-light)",
          "cinder": "var(--gz-cinder)",
          "flint": "var(--gz-flint)",
          "white": "var(--gz-white)"
        }
      },
      "fontFamily": {
        "sans": [
          "Geist",
          "system-ui",
          "-apple-system",
          "sans-serif"
        ],
        "mono": [
          "Geist Mono",
          "Fira Code",
          "monospace"
        ]
      },
      "fontSize": {
        "gz-display": [
          "clamp(2.4rem, 6vw, 5rem)",
          {
            "lineHeight": "0.95",
            "letterSpacing": "-0.035em",
            "fontWeight": "100"
          }
        ],
        "gz-h1": [
          "clamp(2.25rem, 4vw, 3rem)",
          {
            "lineHeight": "1.1",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "gz-h2": [
          "clamp(1.75rem, 3vw, 2.25rem)",
          {
            "lineHeight": "1.15",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "gz-h3": [
          "1.5rem",
          {
            "lineHeight": "1.25",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "gz-h4": [
          "1.25rem",
          {
            "lineHeight": "1.3",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "gz-h5": [
          "1rem",
          {
            "lineHeight": "1.4",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "gz-body-lg": [
          "1.125rem",
          {
            "lineHeight": "1.7",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "gz-body-md": [
          "1rem",
          {
            "lineHeight": "1.7",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "gz-body-sm": [
          "0.875rem",
          {
            "lineHeight": "1.6",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "gz-label-md": [
          "0.75rem",
          {
            "lineHeight": "1",
            "letterSpacing": "0.1em",
            "fontWeight": "500"
          }
        ],
        "gz-label-sm": [
          "0.6875rem",
          {
            "lineHeight": "1",
            "letterSpacing": "0.12em",
            "fontWeight": "500"
          }
        ],
        "gz-eyebrow": [
          "11px",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0.42em",
            "fontWeight": "400"
          }
        ],
        "gz-corner": [
          "10px",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0.24em",
            "fontWeight": "400"
          }
        ],
        "gz-chip": [
          "11px",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0.24em",
            "fontWeight": "500"
          }
        ],
        "gz-data": [
          "0.875rem",
          {
            "lineHeight": "1.4",
            "letterSpacing": "0",
            "fontWeight": "400"
          }
        ],
        "gz-data-lg": [
          "2rem",
          {
            "lineHeight": "1.1",
            "letterSpacing": "-0.02em",
            "fontWeight": "300"
          }
        ]
      },
      "spacing": {
        "section-sm": "var(--gz-section-sm)",
        "section-md": "var(--gz-section-md)",
        "section-lg": "var(--gz-section-lg)",
        "section-xl": "var(--gz-section-xl)",
        "touch": "44px"
      },
      "maxWidth": {
        "container": "1200px",
        "prose": "68ch",
        "modal": "440px"
      },
      "borderRadius": {
        "xs": "var(--gz-radius-xs)",
        "sm": "var(--gz-radius-sm)",
        "md": "var(--gz-radius-md)",
        "card": "var(--gz-radius-card)",
        "lg": "var(--gz-radius-lg)",
        "pill": "var(--gz-radius-pill)"
      },
      "boxShadow": {
        "ember": "var(--gz-shadow-ember)",
        "card": "var(--gz-shadow-card)",
        "card-hover": "var(--gz-shadow-card-hover)",
        "pill-glow": "var(--gz-shadow-pill-glow)",
        "chip-hover": "var(--gz-shadow-chip-hover)",
        "modal": "var(--gz-shadow-modal)",
        "light-card": "var(--gz-shadow-light-card)"
      },
      "transitionTimingFunction": {
        "gaze": "cubic-bezier(0.16, 1, 0.3, 1)",
        "breathe": "cubic-bezier(0.42, 0, 0.58, 1)"
      },
      "transitionDuration": {
        "fast": "150ms",
        "base": "250ms",
        "hover": "320ms",
        "slow": "400ms",
        "slower": "600ms",
        "drift": "1200ms"
      },
      "zIndex": {
        "raised": "10",
        "overlay": "100",
        "modal": "200",
        "toast": "300"
      },
      "backgroundImage": {
        "heat": "var(--gz-gradient-heat)",
        "heat-line": "var(--gz-gradient-heat-line)",
        "ambient": "var(--gz-gradient-ambient)"
      },
      "keyframes": {
        "gz-breathe": {
          "0%, 100%": {
            "transform": "scale(1)"
          },
          "50%": {
            "transform": "scale(1.04)"
          }
        },
        "gz-glow": {
          "0%, 100%": {
            "opacity": "0.55"
          },
          "50%": {
            "opacity": "1"
          }
        },
        "gz-dot": {
          "0%, 100%": {
            "opacity": "0.55",
            "transform": "scale(1)"
          },
          "50%": {
            "opacity": "1",
            "transform": "scale(1.4)"
          }
        },
        "gz-ambient": {
          "0%, 100%": {
            "opacity": "0.7",
            "transform": "scale(1)"
          },
          "50%": {
            "opacity": "1",
            "transform": "scale(1.05)"
          }
        }
      },
      "animation": {
        "gz-breathe": "gz-breathe 6s ease-in-out infinite",
        "gz-glow": "gz-glow 6s ease-in-out infinite",
        "gz-dot": "gz-dot 2.4s ease-in-out infinite",
        "gz-ambient": "gz-ambient 9s ease-in-out infinite"
      }
    }
  }
};
