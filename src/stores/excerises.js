import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useExceriseStore = defineStore("excerise", () => {
  const reps = ref("");
  const sets = ref("");
  const weight = ref("");
  const excerises = ref([]);

  const getInfo = () => {
    return sets.value;
  };

  return {
    reps,
    sets,
    weight,
    excerises,
    getInfo,
  };
});
