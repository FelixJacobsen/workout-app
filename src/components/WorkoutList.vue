<template>
    <!-- Testing  -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


      
    <!-- <router-link
     class="flex flex-col items-center bg-light-grey p-8 shadow-md"
    v-for="workout in workouts"> -->

    <div v-for="workout in workouts">
    



        <img v-if="workout.workoutType === 'cardio'"
    class="h-24 w-auto"
     src="../assets/img/cardio.png"/>


     <img  v-else
     class="h-24 w-auto"
     src="../assets/img/strength.png"/>

     <p
     class="mt-6 py-1 px-3 textxs text-white bg-light-green shadow-md rounded-lg">{{workout.type}}
    </p>

    <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.type}}</h1>
    <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.name}}</h1>
    <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.type}}</h1>
    <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.sets}}</h1>
    </div>
  </div>

 <!-- <div>
    <h1 v-for="workout in workouts">{{ workout.name }}</h1>
  </div> -->
</template>

<script setup>
defineProps({
  workouts: {
    type: Object,
    required: true,
  },
});
</script>
