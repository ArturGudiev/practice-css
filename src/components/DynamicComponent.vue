<template>
  <div class="component">
    <h2>Dynamic Route: {{ routePath }}</h2>
    <p>This is a dynamic route component for: {{ routePath }}</p>
  </div>
</template>

<script>
export default {
  name: 'DynamicComponent',
  computed: {
    routePath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.component {
  padding: 20px;
  border: 2px solid #9b59b6;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 600px;
  background-color: #f4ecf7;
}
</style>

