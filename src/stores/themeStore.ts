import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false, // Estado inicial
  }),

  actions: {
    // Cambia el tema y actualiza CSS + localStorage
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.applyTheme(); // Aplica los cambios al DOM
    },

    // Aplica las variables CSS al root
    applyTheme() {
      const root = document.documentElement;
      root.classList.toggle('dark', this.isDark);
    },

    // Inicializa el tema (llamar esto en App.vue)
    initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if(savedTheme === 'dark') {
        this.isDark = true;
      }else if(savedTheme === 'light') {
        this.isDark = false;
      }else {
        this.isDark = darkModeMediaQuery.matches;
      }
      this.applyTheme();
    },

    // Detecta el tema del sistema
    isSystemDarkMode() {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      return darkModeMediaQuery.matches;
    }
  },
  getters: {},
});