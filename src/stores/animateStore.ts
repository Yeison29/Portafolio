import { defineStore } from 'pinia';

export const useAnimeteStore = defineStore('animate', {
  state: () => ({
    isHovered: false,
  }),

  actions: {
    setHovered(isHovered: boolean) {
      this.isHovered = isHovered;
    },
  },

  getters: {},
});