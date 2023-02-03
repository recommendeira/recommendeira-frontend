<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRecommendationsStore } from "../stores/recommendations";

const { recommendation, loading } = storeToRefs(useRecommendationsStore());
const { loadSingle } = useRecommendationsStore();

loadSingle("0");
</script>

<template>
  <main>
    <p v-if="loading">Loading recommendations...</p>
    <h1 :class="{ test: true }">{{ recommendation.name }}</h1>
  </main>
</template>
