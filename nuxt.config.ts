// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  // css: ['~/assets/css/main.css'],
  app: {
    baseURL: "/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        // {
        //   charset: 'utf-8'
        // },
      ],
      script: [],
      style: [],
      link: [],
      noscript: [{ children: "Javascript es requerido" }],
    },
  },
  alias: {
    '@': '/<srcDir>', // '@/components/my-component.vue',
    '@assets': '/<srcDir>/assets' // @assets/favicon.ico
  },
  modules: [
    "@vee-validate/nuxt", "@nuxt/content", "@nuxt/ui"],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  // routeRules: {
  //   // pre-render al momento de hacer build - la ruta se genera
  //   '/': {
  //     prerender: true
  //   },
  //   // la pagina se genera bajo demanda, se almacena en cache hasta que el API/store/etc devuelva cambios
  //   '/contact': {
  //     // swr: true
  //     // la pagina se genera bajo demanda, se valida en background y se almacena durante una hora
  //     swr: 3600 
  //   },
  //   // la pagina solo se renderiza en el lado del cliente
  //   '/about': { ssr: false }
  // }
});