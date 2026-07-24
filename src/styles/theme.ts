export const theme = {
  colors: {
    primary: { from: '#6366f1', to: '#8b5cf6' },
    accent: '#f472b6',
    surface: { light: '#ffffff', dark: '#0f172a' },
    text: { light: '#1e293b', dark: '#e2e8f0' },
    muted: { light: '#94a3b8', dark: '#64748b' },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  gradients: {
    hero: 'conic-gradient(from 230deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
  },
} as const
