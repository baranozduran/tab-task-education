<template>
  <div class="home">
    <h1>Countries</h1>
    <div id="main-container">
      <Country
        @clicked-to-country="clickedToCountry($event, country.name)"
        v-bind:key="country.alpha2Code"
        v-for="country in countriesInDatabase"
        v-bind:countryName="country.name"
      />
    </div>
  </div>
</template>

<script>
import postAll from "../services/postCountries";
import Country from "../components/Country.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "PickACountry",
  components: {
    Country,
  },
  data() {
    return {
      temporaryList: [],
    };
  },
  methods: {
    entered() {
      return fetch("https://restcountries.eu/rest/v2/all").then((res) =>
        res.json()
      );
    },
    clickedToCountry(event, key) {
      this.$router.push({
        name: "CountryEntered",
        params: { countryName: key },
      });
    },
    ...mapMutations(["fillDatabase"]),
  },
  computed: { ...mapState(["countriesInDatabase"]) },
  async mounted() {
    let countries = await this.entered();
    this.temporaryList = await postAll(countries);
    this.fillDatabase(this.temporaryList);
    console.log(this.temporaryList);
  },
};
</script>
<style scoped>
#main-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
