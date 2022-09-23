<template>
  <div class="container mt-20">
    <div class="flex flex-col items-center bg-gray-200 p-8 shadow-md"  >
  <img
    v-if="workout.type === 'cardio'"
    class="h-16 w-auto px-10"
    src="../assets/img/cardio.png"
  />

  <img
    v-else
    class="h-16 w-auto px-10"
    src="../assets/img/strength.png"
    />

   
    
    <button
    class="border border-black p-1.5
    " @click="$emit('removeWorkout', workout.id)" >Remove workout</button>
        <p class="mt-6 py-1 px-8 text text-white bg-light-green">
        Workout type: {{ workout.type }}
        </p>
      <h1 class="mt-8 mb-2 text-center text-xl text-light-green">
      Workout name: {{ workout.name }}
      </h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  workout: {
    type: Object,
    required: true,
  },
});
</script>
