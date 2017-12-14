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
		hp: 100,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	},
	"pThree": {
		name: "Forest Cat",
		hp: 150,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	},
	"pFour": {
		name: "Bengal",
		hp: 180,
		atk: 8,
		imageUrl: "",
		cAtk: 15,
	}
}
console.log(characters);

// Making the Characters show up on screen. 
 $(".cha-select").append('<div id="pOne" class="cha-sel"> ' +  characters.pOne.name + ' </div>');
 $(".cha-select").append('<div id="pTwo" class="cha-sel"> ' +  characters.pTwo.name + ' </div>');
 $(".cha-select").append('<div id="pThree" class="cha-sel"> ' +  characters.pThree.name + ' </div>');
 $(".cha-select").append('<div id="pFour" class="cha-sel"> ' +  characters.pFour.name + ' </div>');





// Append to to move Ch between sections.
var playerOne = $( "#pOne" ).click(function() {
	$("#pOne").detach().appendTo('.en-select');


// if statement for if chosen player is empty move there if not ignore. 
// else move it to Enemies avaliable.
if ('cha-select' === 'chaselect:empty')
{
	playerOne;
} else {

	// do not allow it to be filled. 
}

// If  fight selection is empty move there
// Else noone.

// Attack button that knows which two to set against each other. 

// Hide reset till on win loss condition. Clear all areas and return players to start. 
    
})



