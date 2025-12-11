<template>
  <div id="app">
    <h1>Vue Router Project</h1>
    <div class="input-container">
      <input 
        v-model="routeInput" 
        @keyup.enter="navigateToRoute"
        type="text" 
        placeholder="Enter route (e.g., 1, 2a, 3b...)"
        class="route-input"
      />
    </div>
    <nav>
      <div class="nav-section">
        <router-link to="/1">Component 1</router-link> |
        <router-link to="/2">Component 2</router-link> |
        <router-link to="/3">Component 3</router-link>
      </div>
      <div class="nav-section grid-questions">
        <strong>Grid Questions:</strong>
        <router-link to="/g1">G1</router-link> |
        <router-link to="/g1a">G1a</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routeInput: ''
    }
  },
  methods: {
    navigateToRoute() {
      if (this.routeInput.trim()) {
        const route = '/' + this.routeInput.trim()
        this.$router.push(route)
        this.routeInput = ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  color: #42b983;
}

.nav-section {
  margin: 10px 0;
}

.grid-questions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.input-container {
  padding: 20px;
}

.route-input {
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  width: 300px;
  outline: none;
}

.route-input:focus {
  border-color: #42b983;
}
</style>

