<template>
  <NavHeader title="Testie" />
  <RouterView />
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
