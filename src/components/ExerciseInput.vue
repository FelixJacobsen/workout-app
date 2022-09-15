<template>
  <div class="flex flex-col gap-y-5">
    <button @click.prevent="addExercise">Add exercise</button>
    <div
      class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
      v-for="(exercise, index) in exercises"
      :key="index"
    >
      <!-- Strength || Exercise -->
      <div v-if="type === 'strength'" class="flex flex-col md:w-1/3">
        <label for="exercise-name" class="mb-1 text-sm text-light-green"
          >Exercise</label
        >

        <input
          required
          type="text"
          class="p-2 w-full text-black"
          v-model="exercise.exercise"
        />
      </div>

      <!-- Cardio || Type -->

      <div v-else-if="type === 'cardio'" class="flex flex-col md:w-1/3">
        <label for="cardio-type" class="mb-1 text-sm text-at-light-green"
          >Type
        </label>

        <select
          id="cardio-type"
          class="p-2 w-full text-black"
          v-model="exercise.cardioType"
        >
          <option value="#">Select Type</option>
          <option value="run">Runs</option>
          <option value="walk">Walk</option>
          <option value="bicycle">Bicycle</option>
        </select>
      </div>

      <!-- Strength || Sets -->
      <div v-if="type === 'strength'" class="flex flex-col flex-1">
        <label for="sets" class="mb-1 text-sm text-at-light-green">Sets </label>
        <input
          required
          type="text"
          class="p-2 w-full text-black focus:outline-none"
          v-model="exercise.sets"
        />
      </div>

      <!-- Cardio || Distance -->
      <div v-else-if="type === 'cardio'" class="flex flex-col flex-1">
        <label for="distance" class="mb-1 text-sm text-at-light-green"
          >Distance
        </label>
        <input
          required
          type="text"
          class="p-2 w-full text-black"
          v-model="exercise.distance"
        />
      </div>

      <!-- Strength || Weight -->
      <div v-if="type === 'strength'" class="flex flex-col flex-1">
        <label for="weight" class="mb-1 text-sm text-at-light-green"
          >Weight (In kg's)
        </label>
        <input
          required
          type="text"
          class="p-2 w-full text-black focus:outline-none"
          v-model="exercise.weight"
        />
      </div>

      <!-- Cardio || Duration -->
      <div v-else-if="type === 'cardio'" class="flex flex-col flex-1">
        <label for="duration" class="mb-1 text-sm text-at-light-green"
          >Duration
        </label>
        <input
          required
          type="text"
          class="p-2 w-full text-black"
          v-model="exercise.duration"
        />
      </div>

      <!-- Delete exercise  -->
      <img
        @click="deleteExercise(exercise.id)"
        src="../assets/img/cancel.png"
        class="h-4 w-auto absolute -left-5 cursor-pointer"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { uid } from "uid";

//Create data
const workoutName = ref("");
const exercises = ref([]);

const props = defineProps({
  type: String,
  // Lägg till item
});

const addExercise = () => {
  if (props.type === "strength") {
    exercises.value.push({
      id: uid(),
      exercise: "",
      sets: "",
      reps: "",
      weight: "",
    });
  } else if (props.type === "cardio") {
    exercises.value.push({
      id: uid(),
      exercise: "",
      cardioType: "",
      distance: "",
      duration: "",
    });
  }
};

// Change workout form when updated
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
  message.value = "A workout cannot have fewer than one exercise";
  setTimeout(() => {
    message.value = false;
  }, 5000);
};

//Define props
</script>
