export default defineAppConfig({
  ui: {
    prefix: 'nuxt',
    colors: {
      primary: 'red',
      neutral: 'slate'
    },
    button: {
      variants: {
        size: {
          xl: {
            base: 'px-6 py-4'
          }
        }
      }
    }
  }
})
