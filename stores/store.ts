import { defineStore } from "pinia";

export const useWindowDimensionsStore = defineStore({
  id: 'windowDimensionsStore',
  state: () => {
    return {
      width: 0,
      height: 0
    }
  },

  getters: {
    getWidth: (state:any) => {
      return state.width
    },
    getHeight: (state:any) => {
      return state.height;
    }
  },

  actions: {
    setWidth(width: number) {
      this.width = width;
    },
    setHeight(height: number) {
      this.height = height;
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWindowDimensionsStore, import.meta.hot));
}