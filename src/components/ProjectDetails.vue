<template>
  <div>
    <h1>Dettagli del Progetto {{ project ? project.name : '' }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    const projectId = this.$route.params.id;
    if (projectId) {
      this.fetchProjectDetails(projectId);
    }
  },
  methods: {
    async fetchProjectDetails(projectId) {
      try {
        const response = await this.$axios.get(`http://127.0.0.1:8000/api/projects/${projectId}`);
        this.project = response.data.project;
      } catch (error) {
        console.error('Errore nel recupero dei dettagli del progetto', error);
      }
    },
  },
};
</script>
