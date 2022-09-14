<template>
  <div class="min-h-full font-Poppins box-border">
    <NavHeader/>
  <NavFooter/>
  <RouterView />
  </div>
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";
import { RouterLink, RouterView } from "vue-router";
import NavFooter from "./components/NavFooter.vue";
</script>
