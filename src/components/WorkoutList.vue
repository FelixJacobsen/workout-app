<template class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<h1 v-if="!workouts.length" class="text-center text-2xl"> The currently are no workouts</h1>
<h1 v-if="workouts.length" class="text-center  text-2xl">Current workouts</h1>
    <WorkoutListItem
    :workout="workout"
    v-for="(workout) in workouts"
    :key="workout.id"
    @removeWorkout="removeWorkout"
  >
  </WorkoutListItem>

  
</template>

<script setup>
import WorkoutListItem from "./WorkoutListItem.vue";
import ExerciseInput from "./ExerciseInput.vue";

const props = defineProps({
  workouts: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["removeWorkout"]);

function removeWorkout(id) {
  emits("removeWorkout", id);
}
</script>
