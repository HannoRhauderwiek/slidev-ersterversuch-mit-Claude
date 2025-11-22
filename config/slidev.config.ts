import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Globale Präsentations-Einstellungen
  title: 'KI-Schulung',
  titleTemplate: '%s - KI-Schulungen',
  
  // Theme-Konfiguration
  theme: 'default',
  
  // Schriftarten
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", "Fira Code", "Roboto Mono", monospace',
    weights: '300,400,500,600,700',
  },
  
  // Syntax Highlighting
  highlighter: 'shiki',
  
  // Shiki Theme
  shikiSetup: {
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
  },
  
  // CSS/UnoCSS
  css: 'unocss',
  
  // Drawing/Annotationen
  drawings: {
    enabled: true,
    persist: false,
    presenterOnly: false,
    syncAll: true,
  },
  
  // Export-Optionen
  export: {
    format: 'pdf',
    timeout: 30000,
    dark: false,
    withClicks: true,
    withToc: false,
  },
  
  // Download-Option
  download: true,
  
  // Info-Anzeige
  info: true,
  
  // Line Numbers in Code
  lineNumbers: true,
  
  // Monaco Editor
  monaco: 'dev',
  
  // Remote Assets
  remoteAssets: true,
  
  // Context Menu
  contextMenu: true,
  
  // Router Mode
  routerMode: 'history',
  
  // Aspect Ratio
  aspectRatio: '16/9',
  
  // Canvas Size
  canvasWidth: 980,
  
  // Theme Config
  themeConfig: {
    primary: '#007AFF',
    secondary: '#5856D6',
  },
  
  // Vite Configuration
  vite: {
    server: {
      port: 3030,
    },
  },
})
