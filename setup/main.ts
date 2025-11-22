import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App Konfiguration
  // Hier können Sie globale Plugins, Komponenten oder Direktiven hinzufügen
  
  // Beispiel: Globale Eigenschaften
  app.config.globalProperties.$appName = 'KI-Schulungen'
  
  // Router Guards (optional)
  router.beforeEach((to, from, next) => {
    // Tracking oder andere Logik
    next()
  })
  
  // Performance Monitoring (optional)
  if (import.meta.env.DEV) {
    app.config.performance = true
  }
})
