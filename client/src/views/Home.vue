<template>
  <div class="home">
    <h1>Countries</h1>
    <div id="main-container">
      <CountryForm />
      <div id="countries-container">
        <Country
          @double-clicked-to-country="deleteCountry($event, country.name)"
          @clicked-to-country="clickedToCountry($event, country.name)"
          v-bind:key="country.alpha2Code"
          v-for="country in countriesInDatabase"
          v-bind:countryName="country.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axiosRequests from "../services/axiosRequests";
import Country from "../components/Country.vue";
import CountryForm from "../components/CountryForm.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "PickACountry",
  components: {
    Country,
    CountryForm,
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
    ...mapMutations(["fillDatabase", "deleteCountryx"]),
    async deleteCountry(event, nameOfCountry) {
      let deletedCountryName = await axiosRequests.deleteCountry(nameOfCountry);
      this.deleteCountryx(deletedCountryName.countryName);
    },
  },
  computed: { ...mapState(["countriesInDatabase"]) },
  async mounted() {
    let countries = await this.entered();
    this.temporaryList = await axiosRequests.postCountries(countries);
    this.fillDatabase(this.temporaryList);
  },
};
</script>
<style scoped>
#countries-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
