<template>
  <form @submit="createWorkout" class="flex flex-col gap-y-5 w-full">
    <h1 class="text-2xl text-light-green">Add workout</h1>

    <!-- Workout name -->
    <div class="flex flex-col">
      <label for="workout-name"
       class="mb-1 text-sm text-at-light-green"
        > Workout name</label
      >

      <input
        id="workout-name"
        type="text"
        required
        class="p-2 text-black border border-black bg-gray-200"
        placeholder="Enter workout name"
        v-model="workoutName"
      />
    </div>

    <!--Workout type  -->
    <div class="flex flex-col">
      <label class="mb-1 text-sm text-at-light-green">Workout type</label>

      <select
        id="workout-type"
        class="p-2 text-black border border-black bg-gray-200 "
        required
        v-model="type"
        @change="workoutChange"
      >
        <option value="select-workout">Select type of training</option>
        <option value="strength">Strength training</option>
        <option value="cardio">Cardio</option>
      </select>
    </div>

    <!-- Strength training types -->
    <div v-if="type === 'strength'" class="flex flex-col gap-y-5"></div>
    <ExerciseInput v-if="type === 'strength'" type="strength" />
    <ExerciseInput v-if="type === 'cardio'" type="cardio" />

    <!-- Cardio training types -->
    <div v-if="type === 'cardio'" class="flex flex-col gap-y-4">
      <div
        class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
        v-for="(item, index) in exercises"
        :key="index"
      ></div>

      <!--Button to add excercise -->
    </div>
    <button
      @click.prevent="
        $emit('addWorkout', {
          id: uid(),
          name: workoutName,
          exercises: exercises,
          type: type,
        })
      "
      class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-light-green duration-200 border-solid border-2 border-transparent hover:border-light-green hover:bg-white hover:text-light-green"
    >
      Add Workout
    </button>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { uid } from "uid";
import ExerciseInput from "./ExerciseInput.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const currentID = route.params.workoutId;
const workoutName = ref("");
const type = ref("select-workout");
const exercises = ref([]);
const message = ref("");

const addExercise = () => {
  if (type === "strength") {
    exercises.value.push({
      id: uid(),
      excerise: "",
      sets: "",
      reps: "",
      weight: "",
    });
  } else {
    exercises.value.push({
      id: uid(),
      cardioType: "",
      distance: "",
      duration: "",
    });
  }
};

const workoutChange = () => {
  exercises.value = [];
  addExercise();
};

const deleteExercise = (id) => {
  if (exercises.value.length > 1) {
    exercises.value = exercises.value.filter(
      (exercises) => exercises.id !== id
    );
    return;
  }
  message.value = "A workout cannot have fewer than one excerise";
  setTimeout(() => {
    message.value = false;
  }, 5000);
};
</script>
