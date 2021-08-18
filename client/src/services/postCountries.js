import Api from "./Api";

export default (countries) => {
  let countriesInDatabase = Api()
    .post("", countries)
    .then((response) => response.data);
  return countriesInDatabase;
};
