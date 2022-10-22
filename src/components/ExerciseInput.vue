<template>
  <div
    v-if="message"
    class="mb-10 p-4 bg-light-grey rounded-md border-2 border-red-700"
  >
    <p class="text-red-700">{{ message }}</p>
  </div>

  <!-- Workout name -->
  <div class="flex flex-col"></div>

  <div class="flex flex-col gap-y-5">
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
          v-model="exercise.name"
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
          v-model="sets"
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
          v-model="weight"
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
    <button
      class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-light-green duration-200 border-solid border-2 border-transparent hover:border-light-green hover:bg-white hover:text-light-green"
      @click.prevent="addExercise"
    >
      Add exercise
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { uid } from "uid";

//Create data
const exercises = ref([]);
const message = ref("");
const name = ref("");

//Strength
const reps = ref(0);
const sets = ref(0);
const weight = ref(0);

//Cardio
const cardioType = ref("");
const distance = ref("");
const duration = ref("");

const props = defineProps({
  type: String,
});

const emits = defineEmits(["addExerciseToWorkout"]);

const addExercise = () => {
  let exercise;

  console.log("Props type:", props.type);

  if (props.type === "cardio") {
    console.log("Inside:", props.type);
    exercise = {
      id: uid(),
      name: name.value,
      cardioType: cardioType.value,
      distance: distance.value,
      duration: duration.value,
      workoutName: "",
    };
  } else if (props.type === "strength") {
    console.log("Inside:", props.type);
    exercise = {
      id: uid(),
      name: name.value,
      sets: sets.value,
      reps: reps.value,
      weight: weight.value,
      workoutName: "",
    };
  }

  exercises.value.push(exercise);
  emits("addExerciseToWorkout", exercise);
  console.log("ExerciseINput log:", exercise);
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
  message.value = "A workout cannot have fewer than one exercise";
  setTimeout(() => {
    message.value = false;
  }, 5000);
};
</script>
