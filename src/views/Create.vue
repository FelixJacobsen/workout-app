<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">

    <div v-if="message"
    class="mb-10 p-4 bg-light-grey rounded-md border-2 border-red-700"
    >
      <p class="text-red-700">{{ message }}</p>
    </div>
      
      <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
        <form @submit="createWorkout"
         class="flex flex-col gap-y-5 w-full">


            <!-- Top text -->
            <h1 class="text-2xl text-light-green">Add workout</h1>

            <!-- Workout name -->
      <div class="flex flex-col">
        <label for="workout-name" class="mb-1 text-sm text-at-light-green"
          >Workout name</label
        >
        <input
          id="workout-name"
          type="text"
          required
          class="p-2 text-black focus:outline-none"
        />
      </div>

        <!--Workout type  -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-green"
          >Workout type</label
        >

        <select
          id="workout-type"
          class="p-2 text-black focus:outline-none"
          required
          v-model="workoutType"
          @change="workoutChange"
        >
          <option value="select-workout">Select type of training</option>
          <option value="strength">Strength training</option>
          <option value="cardio">Cardio</option>
        </select>
        </div>



        
        <!-- Strength training types -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-5">

          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
           v-for="(item,index) in exercises" 
          :key="index"
          >
        
    
          <div class="flex flex-col md:w-1/3">
            <label for="excerise-name" class="mb-1 text-sm text-light-green">
              Excerise
            </label>

            <input required type="text
            " class="p-2 w-full text-black " 
            v-model="item.exercise"
            />
          </div>

          <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-at-light-green">Sets </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black focus:outline-none"
                v-model="item.sets"
              />
            </div>

            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-at-light-green">Reps </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black focus:outline-none"
                v-model="item.reps"
              />
            </div>

            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-at-light-green"
                >Weight (In kg's)
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black focus:outline-none"
                v-model="item.weight"
              />
            </div>

            <img
              @click="deleteExercise(item.id)"
              src="../assets/img/cancel.png"
              class="h-4 w-auto absolute -left-5 cursor-pointer"
              alt=""
            />
            
          </div>

          <button
            @click="addExercise"
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
            text-white bg-light-green duration-200 border-solid
              border-2 border-transparent"
          >
            Add Exercise
          </button>
        </div>

          <!-- Cardio training types -->

          <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/3">
              <label for="cardio-type" class="mb-1 text-sm text-at-light-green"
                >Type
              </label>


              <select
                id="cardio-type"
                class="p-2 w-full text-black"
                v-model="item.cardioType"
              >
                <option value="#">Select Type</option>
                <option value="run">Runs</option>
                <option value="walk">Walk</option>
                <option value="bicycle">Bicycle</option>
              </select>
            </div>


            <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-at-light-green"
                >Distance
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black "
                v-model="item.distance"
              />
            </div>


            <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-at-light-green"
                >Duration
              </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black"
                v-model="item.duration"
              />
            </div>


            <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-at-light-green">Pace </label>
              <input
                required
                type="text"
                class="p-2 w-full text-black"
                v-model="item.pace"
              />
            </div>


            <img
              @click="deleteExercise(item.id)"
              src="../assets/img/cancel.png"
              class="h-4 w-auto absolute -left-5 cursor-pointer"
              alt=""
            />
         
        </div>



          <!--Button to add excercise -->
          <button
            @click="addExercise"
            type="button"
            class="mt-6 py-2 px-6 rounded-sm self-start text-sm
            text-white bg-light-green duration-200 border-solid
              border-2 border-transparent"
          >
            Add Exercise
          </button>
      </div>
    
      <button
          type="submit"
          class="mt-6 py-2 px-6 rounded-sm self-start text-sm
      text-white bg-light-green duration-200 border-solid
      border-2 border-transparent hover:border-light-green hover:bg-white
      hover:text-light-green"
        >
          Add Workout
        </button>

        </form>
      </div>
  </div>
</template>

<script>
  import {ref} from "vue";
  import { uid } from "uid";
  export default{
    name: 'create',
    data() {
      //Create data
      const workoutName = ref('');
      const workoutType = ref('select-workout');
      const exercises = ref([1]);
      const message= ref("");

      // Add a new exercise
    
      const addExercise = () =>{
        if(workoutType === 'strength'){
          exercises.value.push({
            id: uid(),
            excerise: "",
            sets: "",
            reps: "",
            weight: "",
          })
          return
        }
        exercises.value.push({
            id: uid(),
            cardioType: "",
            distance: "",
            duration: "",
          })

      }

      // Change workout form when updated
      const workoutChange = () =>{
          exercises.value =  [];
          addExercise();
      }

      // Delete a excerise
  
      const deleteExercise = (id) =>{
        if(exercises.value.length > 1){
          exercises.value = exercises.value.filter((exercises) => exercises.id !== id);
          return;
        }
        message.value = "A workout cannot have fewer than one excerise";
        setTimeout(() => {
          message.value = false;
        }, 5000);
      };


      // Create a workout

      const createWorkout = async () =>{
        try{
          this.workoutName = workoutName;
        }catch(error){
          message.value = `Error: ${error.message}`;
          setTimeout(() => {
          message.value = false;
        }, 5000);
        }
      }
      return {
    workoutName,workoutType,exercises, addExercise,workoutChange,deleteExercise,message,createWorkout };
    },
  };

</script>
