import { defineStore } from "pinia";

export const useRecommendationsStore = defineStore({
  id: "recommendations",
  state: () => ({
    recommendations: [] as { name: string }[],
    recommendation: { name: "" },
    loading: false,
  }),
  getters: {
    getRecommendations: (state) => state.recommendations,
  },
  actions: {
    async load() {
      this.recommendations = [];
      this.loading = true;

      const response = await fetch("http://localhost:3000/recommendations");
      this.recommendations = await response.json();

      this.loading = false;
    },
    async loadSingle(id: String) {
      this.recommendation = { name: "" };
      this.loading = true;

      const response = await fetch(
        `http://localhost:3000/recommendations/${id}`
      );
      this.recommendation = await response.json();

      this.loading = false;
    },
  },
});
