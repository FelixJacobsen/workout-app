<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <WorkoutForm @addWorkout="addWorkout" @deleteWorkout="deleteWorkout"/>
    </div>
    <WorkoutList :workouts="workouts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorkoutForm from "../components/WorkoutForm.vue";
import WorkoutList from "../components/WorkoutList.vue";

import { useRoute, useRouter } from "vue-router";

//Create data
const workoutName = ref("");
const type = ref("select-workout");
const exercises = ref([]);
const message = ref("");



const route = useRoute();
const currentID = route.params.workoutId;


const workouts = ref([]);

function addWorkout(workout) {
  workouts.value.push(workout);
}

function deleteWorkout (index){
  workouts.splice(index,1);
}
</script>
