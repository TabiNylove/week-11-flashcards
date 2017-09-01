// // This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// // module.exports = ClozeCard;

// // The constructor should accept two arguments: text and cloze.
// // The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// // The constructed object should have a partial property that contains only the partial text.
// // The constructed object should have a fullText property that contains only the full text.
// // The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// // Use prototypes to attach these methods, wherever possible.

var ClozeCard = function(partial, cloze, fullText) {
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText; 
}

module.exports = ClozeCard;
// // The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.

// //EXAMPLES

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
