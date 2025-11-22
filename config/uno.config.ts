import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Custom shortcuts
    'btn': 'px-4 py-2 rounded inline-block bg-primary text-white cursor-pointer hover:bg-secondary transition-all duration-200',
    'btn-outline': 'px-4 py-2 rounded inline-block border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-200',
    'card': 'bg-surface rounded-xl p-6 shadow-md',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        mono: 'Fira Code:400,500,600',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6',
      accent: '#FF9500',
      success: '#34C759',
      warning: '#FF9500',
      error: '#FF3B30',
      info: '#007AFF',
      surface: '#F5F5F7',
    },
  },
})
