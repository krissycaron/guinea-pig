
// Note: Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
var outputElement = document.getElementById("output-target");
var articleElement = document.getElementsByClassName("article-section");
var headingColor = document.getElementById("page-title");
var addColorBtn = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig")
var addHulkifyBtn = document.getElementById("make-large");
var addBorderBtn = document.getElementById("add-border"); 
var addRoundingBtn = document.getElementById("add-rounding");
var inputTextFromDOM = document.getElementById("keypress-input");

 
var textOnMouseClick function () {
 	outputElement.innerHTML = "You clicked the " + event.target.innerHTML + " section!"
}

document.getElementsByClassName("article-section").addEventListener("click", textOnMouseClick;

console.log(textOnMouseClick);


