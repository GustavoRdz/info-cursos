<template>
  <div id="app">
    <div id="nav" class="bg-green-100 fixed w-full">
      <router-link to="/">Home</router-link> |
      <router-link to="/FisicaII">Fisica II</router-link> |
      <router-link to="/FisicaIV">Física IV</router-link> |
      <router-link to="/LabFisicaIV">Lab. Física IV</router-link> |
      <router-link to="/mecatronicaComputacional">Mecatronica computacional</router-link> |
      <router-link to="/mecatronicaComputacionalLab">Mecatronica computacional Lab</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="container py-32"/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
