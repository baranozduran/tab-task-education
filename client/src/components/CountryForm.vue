<template>
  <div id="form-container">
    <form id="create-country">
      <label for="c-name"> Country Name: </label>
      <input v-model="country.name" type="text" id="c-name" name="c-name" />
      <br />
      <label for="c-capital"> Capital: </label>
      <input
        v-model="country.capital"
        type="text"
        id="c-capital"
        name="c-capital"
      />
      <br />
      <label for="c-population"> Population: </label>
      <input
        v-model="country.population"
        type="number"
        id="c-population"
        name="c-population"
      />
      <br />
      <label for="c-language"> Language: </label>
      <input
        v-model="country.language"
        type="text"
        id="c-language"
        name="c-language"
      />
      <br />
      <label for="c-cal-code"> Calling Code: </label>
      <input
        v-model="country.callingCode"
        type="text"
        id="c-cal-code"
        name="c-cal-code"
      />
      <br />
      <button type="button" @click="add()">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import axiosRequests from "../services/axiosRequests";
export default {
  name: "CountryForm",
  data() {
    return {
      country: {
        name: "",
        capital: "",
        population: 0,
        language: "",
        callingCode: ""
      }
    };
  },
  methods: {
    ...mapMutations(["addCountry"]),
    async add() {
      let countryResponse = await axiosRequests.addCountry(this.country);
      this.addCountry(countryResponse);
    }
  },
  computed: {
    ...mapState(["countriesInDatabase"])
  }
};
</script>

<style></style>
