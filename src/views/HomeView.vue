<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <WorkoutForm @addWorkout="addWorkout" />
    </div>
    <WorkoutList @removeWorkout="onRemoveWorkout" :workouts="workouts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorkoutForm from "../components/WorkoutForm.vue";
import WorkoutList from "../components/WorkoutList.vue";

const workoutName = ref("");
const workoutType = ref("select-workout");
const exercises = ref([1]);
const message = ref("");

const workouts = ref([]);

function addWorkout(workout) {
  workouts.value.push(workout);
}

function onRemoveWorkout(id) {
  workouts.value = workouts.value.filter((workout) => workout.id !== id);
}
</script>
