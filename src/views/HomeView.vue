<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <WorkoutForm
        @addExerciseToWorkout="addExerciseToWorkout"
        @addWorkout="addWorkout"
      />
    </div>
    <WorkoutList @removeWorkout="onRemoveWorkout" :workouts="workouts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorkoutForm from "../components/WorkoutForm.vue";
import WorkoutList from "../components/WorkoutList.vue";

//Create data
const workoutName = ref("");
const workoutType = ref("select-workout");
const exercises = ref([]);
const message = ref("");

const workouts = ref([]);

function addWorkout(workout) {
  workout.exercises = exercises.value;
  console.log("Add workout in HomeView");
  exercises.value = [];
  workouts.value.push(workout);
}

function onRemoveWorkout(id) {
  workouts.value = workouts.value.filter((workout) => workout.id !== id);
}

//Add exercise to workout

const addExerciseToWorkout = (exercise) => {
  exercises.value.push(exercise);
  console.log("AddExerciseToWorkout in HomeView", exercise);
};
</script>
