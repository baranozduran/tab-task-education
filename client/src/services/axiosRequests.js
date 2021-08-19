import Api from "./Api";

export default {
  postCountries: function(countries) {
    let countriesInDatabase = Api()
      .post("", countries)
      .then((response) => response.data);
    return countriesInDatabase;
  },
  addCountry: function(country) {
    let newCountry = Api()
      .put("", country)
      .then((response) => response.data);
    return newCountry;
  },
  deleteCountry: function(nameOfCountry) {
    let deletedCountry = Api()
      .delete("", { data: { countryName: nameOfCountry } })
      .then((response) => response.data);
    return deletedCountry;
  },
};
