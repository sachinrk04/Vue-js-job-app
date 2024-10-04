<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <HeroBanner />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
