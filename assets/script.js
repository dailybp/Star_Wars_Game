// PsuedoCode
// create an array for the list of combatants
// when clicked the first choice becomes the hero
// on the second click the choice becomes the first enemy
// both are removed from the list of combatants array
//
// when the attack button is pressed:
// a description is generated and appended to the HTML jumbotron
// both the hero and villian have thier health decreased by their attack
// also if they have an ability it kicks in with subsequent attacks.
//
// If the health of the hero or villian becomes 0 then they are killed and removed from the enemy array

//Global Variables
//==============================================================================
var combatants = [
  { name:"Sir Jamie",
  health:100,
  attack:10,
  defense:5,
  image: "assets/images/sir_jamie.jpg"
},
{ name:"Drogon",
  health:200,
  attack:20,
  defense:0,
  image: "assets/images/drogon.jpg"
}];

var hero = null;
var villian = null;
var heroSelected = false;
var villianSelected = false;
var attackOccurred = false;
var winOccurred = false;
var lossOccurred = false;
var wounded = false;
var gameOver = false;
var gameStart = true;
var previouslyFought = [];
//var attackPower = null;

//Functions
//==============================================================================



$("#attack").on("click",function(){
  if(heroSelected && villianSelected && !gameOver){
    villian.health = villian.health - hero.attack;
  }
});


//Main Process
//==============================================================================
for(var i = 0; i < combatants.length; i++){
  var combatantImage = $("<img>");//assigns an image tag to variable combatantImage
  combatantImage.addClass("combatant-image");//assigns an a html class tag to combatantImage
  combatantImage.attr("fighter-stats", combatants[i]);
  combatantImage.attr("src", combatants[i].image);//attaches an image to the combatantImage
  console.log(combatantImage)
  $("#combatants").append(combatantImage);//appends the image to the html file
};

$(".combatant-image").on("click",function(){
  hero = $(this).attr("fighter-stats");
  combatants.splice()
  $("#hero") = hero;
  $("#villian") = villian;
});
