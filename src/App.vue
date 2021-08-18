<template>
  <div id="app">
    <header class="header">
      <h1>Джавани Пиццерио</h1>
      <Address />
    </header>

    <main>
      <Order />
    </main>
  </div>
</template>

<script>
import Address from "./components/Address.vue";
import Order from "./components/Order";

export default {
  name: 'App',
  components: {
    Order,
    Address,
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/app";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.header {
  text-align: left;
}

.input {
  padding: 5px;
  min-height: 30px;
  width: 250px;
  border: 0.5px solid $primary;

  &:hover,
  &:focus {
    border-color: $secondary;
  }

  &--number {
    min-height: 15px;
    width: 50px;
  }
}
.button {
  min-width: 300px;
  min-height: 30px;
  color: white;
  font-size: 14px;
  background-color: $primary;
  border: none;

  &:hover,
  &:focus {
    background-color: $secondary;
  }
  &:active {
    background-color: $dark;
  }
}
</style>
