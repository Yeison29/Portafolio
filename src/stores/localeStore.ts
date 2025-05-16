import { defineStore } from 'pinia';
import type { Locale } from 'vue-i18n';

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    lang: 'es' as Locale,
  }),
  actions: {
    changeLang(newLang: Locale) {
      this.lang = newLang;
      localStorage.setItem('lang', newLang);
      
      // Disparamos un evento personalizado
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: newLang
      }));
    },

    initLang() {
      const savedLang = localStorage.getItem('lang') as Locale | null;
      const browserLang = navigator.language.split('-')[0] as Locale;
      
      this.lang = savedLang || (['en', 'es'].includes(browserLang) ? browserLang : 'es');
      this.changeLang(this.lang); // Usamos changeLang para mantener consistencia
    }
  },
  getters: {}
});
