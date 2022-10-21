import { defineStore } from 'pinia';
import projects from '../../data.json' assert { type: 'json' };
export const useDataProject = defineStore('project', {
  state: () => {
    return { data: projects };
  },
  getters: {
    projects: (state) => state,
  },
  // actions: {

  // },
});
