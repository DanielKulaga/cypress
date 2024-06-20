import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://ebay.com/',
  },
  chromeWebSecurity: false,
})

