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

//Functions
//==============================================================================

//Main Process
//==============================================================================
for(var i = 0; i < combatants.length; i++){
  var combatantImage = $("<img>");//assigns an image tag to variable combatantImage
  combatantImage.addClass("combatant-image");//assigns an a html class tag to combatantImage
  combatantImage.attr("src", combatants[i].image);//attaches an image to the combatantImage
  console.log(combatantImage)
  $("#combatants").append(combatantImage);//appends the image to the html file
};
