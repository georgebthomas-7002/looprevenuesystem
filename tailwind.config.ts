import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Font Families - Fraunces (display) + Source Sans 3 (body)
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      // Type Scale (Major Third - 1.25 ratio)
      fontSize: {
        'xs': ['0.8rem', { lineHeight: '1.5' }],      // 12.8px
        'sm': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'base': ['1.0625rem', { lineHeight: '1.6' }], // 17px
        'lg': ['1.125rem', { lineHeight: '1.6' }],   // 18px
        'xl': ['1.375rem', { lineHeight: '1.3' }],   // 22px
        '2xl': ['1.75rem', { lineHeight: '1.2' }],   // 28px
        '3xl': ['2.25rem', { lineHeight: '1.2' }],   // 36px
        '4xl': ['2.5rem', { lineHeight: '1.1' }],    // 40px
        '5xl': ['3rem', { lineHeight: '1.1' }],      // 48px
        '6xl': ['4rem', { lineHeight: '1.1' }],      // 64px
      },
      // Color Palette
      colors: {
        // Base Palette
        bg: {
          DEFAULT: '#FDFBF7',
          alt: '#F8F6F1',
          cream: '#FAF8F3',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        // Text Colors
        text: {
          primary: '#1E1E1E',
          secondary: '#4A4A4A',
          muted: '#6B6B6B',
          light: '#8A8A8A',
          inverse: '#FFFFFF',
        },
        // Loop Accent Colors
        loop: {
          marketing: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            tint: 'rgba(245, 158, 11, 0.1)',
            light: 'rgba(245, 158, 11, 0.05)',
          },
          sales: {
            DEFAULT: '#10B981',
            hover: '#059669',
            tint: 'rgba(16, 185, 129, 0.1)',
            light: 'rgba(16, 185, 129, 0.05)',
          },
          service: {
            DEFAULT: '#0EA5E9',
            hover: '#0284C7',
            tint: 'rgba(14, 165, 233, 0.1)',
            light: 'rgba(14, 165, 233, 0.05)',
          },
          ops: {
            DEFAULT: '#64748B',
            hover: '#475569',
            tint: 'rgba(100, 116, 139, 0.1)',
            light: 'rgba(100, 116, 139, 0.05)',
          },
        },
        // Legacy Brand Colors
        brand: {
          navy: '#142d63',
          teal: '#028393',
          peach: '#faaa68',
          orange: '#f65625',
          blue: '#3D5A80',
          'light-blue': '#98C1D9',
          cyan: '#E0FBFC',
        },
        // Border Colors
        border: {
          DEFAULT: '#E5E5E5',
          light: '#F0F0F0',
          dark: '#D4D4D4',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#22C55E',
          light: 'rgba(34, 197, 94, 0.1)',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: 'rgba(245, 158, 11, 0.1)',
        },
        error: {
          DEFAULT: '#EF4444',
          light: 'rgba(239, 68, 68, 0.1)',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: 'rgba(59, 130, 246, 0.1)',
        },
      },
      // Spacing System (8px grid)
      spacing: {
        '4.5': '1.125rem', // 18px
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
      },
      // Border Radius
      borderRadius: {
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      // Box Shadows
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 2px 4px rgba(0, 0, 0, 0.06)',
        DEFAULT: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'md': '0 6px 20px rgba(0, 0, 0, 0.1)',
        'lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
        // Loop-colored shadows
        'marketing': '0 4px 20px rgba(245, 158, 11, 0.15)',
        'sales': '0 4px 20px rgba(16, 185, 129, 0.15)',
        'service': '0 4px 20px rgba(14, 165, 233, 0.15)',
        'ops': '0 4px 20px rgba(100, 116, 139, 0.15)',
      },
      // Max Width for content
      maxWidth: {
        'content': '64rem',     // 1024px
        'narrow': '48rem',      // 768px
        'wide': '80rem',        // 1280px
      },
      // Animation
      transitionDuration: {
        'fast': '150ms',
        DEFAULT: '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      // Line Height
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.3',
        'relaxed': '1.5',
        'loose': '1.6',
      },
      // Letter Spacing
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.02em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
}
export default config
