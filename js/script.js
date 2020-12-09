
$(“#search-zip”).on(“click”, function(event) {
  event.preventDefault();
var zip = $(“#zip-input”).val();
var apikey = “cZikOcr4948UWDEGCGKnI1xKOaUYqRjqzqamybB42vuUkTGMnNA1wZYsFVDpcHcH”
var queryURL = “https://www.cors-anywhere.herokuapp.com/” + “https://www.zipcodeapi.com/rest/” + apikey + “/radius.json/” + zip + “/15/miles”;
// var queryURL = “https://www.zipcodeapi.com/rest/” + apikey + “/radius.json/” + zip + “/15/miles”;
$.ajax({
url: queryURL,
method: “GET”
}).then(function(response) {
  $(“#zip-data”).text(JSON.stringify(response));
  $(“#zip-data”).text(response.zip_code);
  $(“#zip-data”).text(response.distance);
  $(“#zip-data”).text(response.city);
  $(“#zip-data”).text(response.state);
  console.log(queryURL);
console.log(response);
  })