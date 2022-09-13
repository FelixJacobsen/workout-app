<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <form class="flex flex-col gap-y-5 w-full">
      <div class="flex flex-col">
        <label for="workout-name" class="mb-1 text-sm text-at-light-green"
          >Workout name</label
        >
        <input
          type="text"
          required
          class="p-2 text-gray-500 focus:outline-none"
        />
      </div>

      <div class="flex flex-col">
        <label for="workout-type" class="mb-1 text-sm text-at-light-green"
          >Workout Type</label
        >
        <select
          id="workout-type"
          class="p-2 text-gray-500 focus:outline-none"
          required
          v-model="workoutType"
        >
          <option value="select-workout">Select type of training</option>
          <option value="strength">Strength training</option>
          <option value="cardio">Cardio</option>
          <option value="sports">Sports</option>
          <option value="yoga">Yoga</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script></script>
