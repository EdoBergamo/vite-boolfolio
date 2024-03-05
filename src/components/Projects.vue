<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await this.$axios.get('http://localhost:8000/api/projects');
        this.projects = response.data.projects;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-if="projects.length > 0">
      <ul>
        <li v-for="project in projects" :key="project?.id">
          <a :href="'/projects/' + project.id">
            <h1>{{ project?.name }}</h1>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>