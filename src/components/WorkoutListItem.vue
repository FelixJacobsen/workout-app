<template>
  <div class="container mt-20">
    <div class="flex flex-col items-center bg-gray-200 p-8 shadow-md">
      <img v-if="workout.type === 'cardio'" src="../assets/img/cardio.png" />
      <button
        class="text-red-900 font-bold hover:text-red-400"
        @click="$emit('removeWorkout', workout.id)"
      >
        Delete workout
      </button>

      <p
        class="mt-6 py-1 px-8 text text-white bg-light-green shadow-md rounded-lg uppercase"
      >
        {{ workout.type }}
      </p>
      <h1 class="mt-8 mb-2 text-center text-xl text-light-green">
        Workout name: {{ workout.name }}
      </h1>

      <h1 class="mt-8 mb-2 text-center text-xl text-light-green">
        <ul>
          <li v-for="exercise in workout.exercises">
            <p>Type of exercise: {{ exercise.cardioType }}</p>
            <p>Distance: {{ exercise.distance }}</p>
            <p>Duration: {{ exercise.duration }}</p>
          </li>
        </ul>
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
