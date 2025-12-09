export default defineNuxtRouteMiddleware((to) => {
  // Nur Preview-Seiten schützen
  if (!to.path.startsWith('/sections/')) {
    return
  }

  // In Development Mode immer erlauben
  if (process.dev) {
    return
  }

  // Prüfe auf Studio-Authentication
  // Studio setzt einen speziellen Header oder Query-Parameter
  const isStudioAuth = 
    to.query.studio === 'true' || 
    to.query._studioAuth === 'true' ||
    process.client && (
      document.referrer.includes('nuxt.studio') ||
      window.opener?.location.href.includes('nuxt.studio')
    )

  if (!isStudioAuth) {
    // Nicht authentifiziert - weiterleiten zur Hauptseite
    return navigateTo('/')
  }
})
