<template>
  <button
    @click="$emit('double-clicked-to-country', $event)"
    @dblclick="$emit('clicked-to-country', $event)"
    id="container"
  >
    <p>{{ countryName }}</p>
  </button>
</template>

<script>
export default {
  name: "Country",
  props: {
    countryName: String,
  },
};
</script>

<style>
#container {
  flex: 1;
}
</style>
