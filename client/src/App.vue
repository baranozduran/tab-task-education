<template>
  <div id="main-container">
    <div id="nav">
      <router-link id="list" :to="{ name: 'PickACountry' }"
        >COUNTRY LIST</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
}
#list {
  text-align: left;
  position: absolute;
  left: 20px;
}
</style>
