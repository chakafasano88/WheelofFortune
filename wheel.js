// Give the user a word or words to guess by entering letters
// These words should be in an array
//
// var choice = []
// var blanks = underscore(arrayLength)
// var arrayLength = choice.length;
//
// function underscore(arrayLength){
//   // Value of each character in string
//   var value = "";
//   for(var i = 0; i <wordLength; i++){
//     value += '_';
//   }
//   return value;
// };

// Button used to generate random Category
var generateBtn = document.getElementById("generateBtn");
// var arrayLength =
// var choiceLength =


// Category Objects
var obj1 = {
  cat: "Barbeque",
  items: ["Hot Dogs", "Hamburgers", "Potato Salad"]
};

var obj2 = {
  cat: "Landmarks",
  items: ["Statue of Liberty", "Kremlin", "Coliseum"]
};

var obj3 = {
  cat: "Male Actors",
  items: ["Edward Norton", "Tom Hanks", "Benicio Del Toro"]
};

var obj4 = {
  cat: "Songs",
  items: ["Lets Stay Together", "Beat It", "Superstition"]
};

// Category Objecs in an array
var bigArray = [obj1, obj2, obj3, obj4];

// Randomizes categories and items within categories

generateBtn.addEventListener("click", function(event){
  var randomNumber = Math.floor(Math.random() * 4);
  document.querySelector("#text").innerHTML = bigArray[randomNumber].cat
  var randomNumber2 = Math.floor(Math.random() * 3);
  document.querySelector("#text2").innerHTML = bigArray[randomNumber].items[randomNumber2]

});

console.log(obj3.items[0].split(""));
