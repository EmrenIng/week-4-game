//document rdy fucntion.
// Variables
var characters = {
	"pOne": {
		name: "Tabby",
		hp: 120,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	},
	"pTwo": {
		name: "Siamese",
		hp: 120,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	},
	"pThree": {
		name: "Forest Cat",
		hp: 120,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	},
	"pFour": {
		name: "Bengal",
		hp: 120,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	}
}
console.log(characters);




 $(".cha-select").append('<div id="pOne" class="cha-sel"> ' +  characters.pOne.name + ' </div>');
 $(".cha-select").append('<div id="pTwo" class="cha-sel"> ' +  characters.pTwo.name + ' </div>');
 $(".cha-select").append('<div id="pThree" class="cha-sel"> ' +  characters.pThree.name + ' </div>');
 $(".cha-select").append('<div id="pFour" class="cha-sel"> ' +  characters.pFour.name + ' </div>');



// Append to to move Ch between sections.


//$(".cha-select").addClass( "pOne" );
//$(".pOne").append("Hello <b>world</b>! " + characters.pOne.name + characters.pOne.hp);

//$(".cha-select").addClass( "pTwo" );
//$(".pTwo").html("Hello <b>world</b>! " + characters.pTwo.name + characters.pTwo.hp);


// Your Character Section
// Enemies to attack
// Defenders
// for each. 