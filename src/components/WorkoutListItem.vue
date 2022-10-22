<template>
  <div class="container mt-20">
    <div class="flex flex-col items-center bg-gray-200 p-8 shadow-md">
      <img
        v-if="workout.type === 'cardio'"
        class="h-20 w-auto px-10"
        src="../assets/img/cardio.png"
      />

      <img v-else class="h-16 w-auto px-10" src="../assets/img/strength.png" />

      <button class="text-red-900" @click="$emit('removeWorkout', workout.id)">
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
      <h1 class="mt-8 mb-2 text-center text-xl text-light-green">
        <ul>
          <li v-for="exercise in workout.exercises">
            <p>Type of exercise: {{ exercise.weight }}</p>
            <p>Distance: {{ exercise.sets }}</p>
            <p>Duration: {{ exercise.reps }}</p>
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
