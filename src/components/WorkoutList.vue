<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


      
   


    <!-- SKapa nytt component -->
    <div v-for="workout in workouts" :workout = "workout" :key="workout.id" >
  

        <img v-if="workout.type === 'cardio'"
        class="h-20 w-auto px-10"
        src="../assets/img/cardio.png"/>


      <img  v-else
      class="h-16 w-auto px-10"
      src="../assets/img/strength.png"/>

      <!-- <div @click="deleteWorkout">
        <img
        src="../assets/img/cancel.png"
        class="h-5 w-auto  cursor-pointer"
        alt=""
      />
      </div> -->

        <WorkoutListItem 
        v-bind:workout="workout"
        v-for="(workout, index) in workouts"
        :key="workout.id"
        @remove="deleteWorkout(index)">
        </WorkoutListItem>
     <p
     
     class="mt-6 py-1 px-8 textxs text-white bg-light-green shadow-md rounded-lg"> Workout type: {{ workout.type }}
    </p>
    <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.name}}</h1>





    <!-- <h1 class="mt-8 mb-2 text-center text-xl text-light-green">{{workout.exercises}}</h1>

    <h1 class="mt-8 mb-2 text-center text-xl text-light-green" v-for="(exercise, index) in exercises " :key="index">{{workouts.exercises}}</h1> -->

  </div>
    </div>


</template>

 <script setup>
import WorkoutListItem from './WorkoutListItem.vue';
import ExerciseInput from './ExerciseInput.vue';

const props = defineProps({
  workouts: {
    type: Array,
    required: true,
  },
});

const deleteWorkout = (id) => {
  if (workouts.value.length > 1) {
    workout.value = exercises.value.filter(
      (workouts) => workouts.id !== id
    );
    return;
  }
  message.value = "A workout cannot have fewer than one excerise";
  setTimeout(() => {
    message.value = false;
  }, 5000);
};

     function removeWorkout(index){
        workout.splice(index,1);
      }




</script> 




