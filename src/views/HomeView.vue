<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRecommendationsStore } from "../stores/recommendations";
import RecommendationDetail from './RecommendationDetail.vue';

const { recommendations, loading } = storeToRefs(useRecommendationsStore());
const { load } = useRecommendationsStore();

load();
</script>

<template>
  <main>
    <p v-if="loading">Loading recommendations...</p>
    <div :class="{ other: true }" v-if="recommendations">
      <div v-for="recommendation in recommendations" :key="recommendation.name">
        <h1>{{ recommendation.name }}</h1>
      </div>
    </div>
    <RecommendationDetail />
  </main>
</template>
