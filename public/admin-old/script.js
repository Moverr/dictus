/*
 * This is a custom script file that is loaded for each instance on each page.
 *
 * Use to it add whatever client scripts your project might need
 */

// import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
        
createApp({
  setup() {
    const message = ref('Hello Vue!')
    return {
      message
    }
  }
}).mount('#moers')