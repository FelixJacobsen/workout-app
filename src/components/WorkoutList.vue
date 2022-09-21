<template>
  <WorkoutListItem
    :workout="workout"
    v-for="(workout, index) in workouts"
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
