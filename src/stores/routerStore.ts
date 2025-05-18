import { defineStore } from 'pinia';

export const useRouterStore = defineStore('router', {
  state: () => ({
    isWelcomePage: false,
  }),

  actions: {
    setWelcomePage(isWelcomePage: boolean) {
      this.isWelcomePage = isWelcomePage;
    },
  },

  getters: {},
});