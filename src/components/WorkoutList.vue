<template>
  <div>
    <h1 v-for="workout in workouts">{{ workout.name }}</h1>
  </div>
</template>

<script setup>
defineProps({
  workouts: {
    type: Object,
    required: true,
  },
});
</script>
