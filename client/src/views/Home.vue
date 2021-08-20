<template>
  <div class="home">
    <h1>Countries</h1>
    <div id="main-container">
      <CountryForm />
      <div id="countries-container">
        <Country
          @double-clicked-to-country="deleteCountry($event, country.name)"
          @clicked-to-country="clickedToCountry($event, country.name)"
          v-bind:key="country.callingCode"
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
    CountryForm
  },
  data() {
    return {
      temporaryList: []
    };
  },
  methods: {
    entered() {
      return fetch("https://restcountries.eu/rest/v2/all").then(res =>
        res.json()
      );
    },
    clickedToCountry(event, key) {
      this.$router.push({
        name: "CountryEntered",
        params: { countryName: key }
      });
    },
    ...mapMutations(["fillDatabase", "deleteCountryx"]),
    async deleteCountry(event, nameOfCountry) {
      let deletedCountryName = await axiosRequests.deleteCountry(nameOfCountry);
      this.deleteCountryx(deletedCountryName.countryName);
    }
  },
  computed: { ...mapState(["countriesInDatabase"]) },
  async mounted() {
    let oldCountries = await this.entered();
    let shortCountries = new Array();
    for (let i = 0; i < oldCountries.length; i++) {
      shortCountries.push({
        name: oldCountries[i].name,
        capital: oldCountries[i].capital,
        population: oldCountries[i].population,
        language: oldCountries[i].languages[0].name,
        callingCode: oldCountries[i].callingCodes[0]
      });
    }
    let countriesObject = { countries: shortCountries };
    this.temporaryList = await axiosRequests.postCountries(countriesObject);
    this.fillDatabase(this.temporaryList);
  }
};
</script>
<style scoped>
#countries-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
