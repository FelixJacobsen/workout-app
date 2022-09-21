<template
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
  <img
    v-if="workout.type === 'cardio'"
    class="h-20 w-auto px-10"
    src="../assets/img/cardio.png"
  />

  <img v-else class="h-16 w-auto px-10" src="../assets/img/strength.png" />

  <button @click="$emit('removeWorkout', workout.id)">Delete</button>
  <p class="mt-6 py-1 px-8 text text-white bg-light-green shadow-md rounded-lg">
    Workout type: {{ workout.type }}
  </p>
  <h1 class="mt-8 mb-2 text-center text-xl text-light-green">
    {{ workout.name }}
  </h1>

  <!-- <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.exercises}}</h1>

    <h1 class="mt-8 mb-2 text-center text-xl text-light-green" v-for="(exercise, index) in exercises " :key="index">{{workouts.exercises}}</h1> -->
</template>

<script setup>
const props = defineProps({
  workout: {
    type: Object,
    required: true,
  },
});
</script>
