<template>
  <div id="main-container">
    <p>Country Name: {{ countryName }}</p>
    <p>Capital: {{ country.capital }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Language: {{ country.language }}</p>
    <p>Calling Code: +{{ country.callingCode }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CountryEntered",
  data() {
    return {
      countryName: this.$route.params.countryName,
      country: Object,
      countryLanguage: String,
      callingCode: String
    };
  },
  methods: {
    findTheCountry(countryName) {
      this.country = this.countriesInDatabase.filter(
        element => element.name === countryName
      )[0];
    }
  },
  mounted() {
    this.findTheCountry(this.countryName);
  },
  computed: {
    ...mapState(["countriesInDatabase"])
  }
};
</script>

<style></style>
