//TRAVERSING THE DOM //
//PARENT NODE
// let itemsList = document.querySelector('#items');
// //parentNode
// console.log(itemsList);
// console.log(itemsList.parentNode); //give parent node
// itemsList.parentNode.style.backgroundColor = '#f4f4f4'; //change parent node color to grey
// console.log(itemsList.parentNode.parentNode.parentNode);

// PARENT ELEMENT //(parentNode is equal to parentElement)
// let itemsList = document.querySelector('#items');
// console.log(itemsList.parentElement); //give parent node
// itemsList.parentElement.style.backgroundColor = '#f4f4f4'; //change parent node color to grey
// console.log(itemsList.parentElement.parentElement.parentElement);

// CHILD NODES
// let itemsList = document.querySelector('#items');
// console.log(itemsList.childNodes);

// console.log(itemsList.children);//not giving line break

// //specific child
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor = 'yellow'; //adding style to 2nd 

//first child
//let itemsList = document.querySelector('#items');
// console.log(itemsList.firstChild);
// //firstElementchild
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent = 'Hello 1';

//lastchild
//let itemsList = document.querySelector('#items');
// console.log(itemsList.lastChild);
// //lastElementchild
// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent = 'Hello last';

//SIBILING
//NEXT SIBILING
// let itemsList = document.querySelector('#items');
// console.log(itemsList.nextSibling);
// //NEXT ELEMENT SIBILING
// console.log(itemsList.nextElementSibling); //gives span as nextElementsibiling, if no, element in sibiling then eturn null

//PREVIOUS SIBILING 
// let itemsList = document.querySelector('#items');
// console.log(itemsList.previousSibling);
// //PREVIOUS ELEMENT SIBILING
// console.log(itemsList.previousElementSibling); //gives TITLE as previousElementsibiling, if no, element in sibiling then Return null
// itemsList.previousElementSibling.style.color = 'green'; //Items color change to green


//CREATE ELEMENT
// let newDiv = document.createElement('div');
// //add class
// newDiv.className = 'helloClass';
// //add id
// newDiv.id = 'helloId';

// //add attribute
// newDiv.setAttribute('title', 'Hello Div');

// //create textNode
// let newDivText = document.createTextNode('HEllo world');
// //add text to div
// newDiv.appendChild(newDivText);
// //<div class="helloClass" id="helloId" title="HelloDiv">Hello World</div>
 
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1); //added in html file in browser



//DOM 7 Assignment 

//1. Now go head and add HEllo word before Item Lister
let itemlister = document.querySelector('#header-title');
itemlister.textContent = "Hello " + itemlister.textContent ;


//2. Now go head and add HEllo word before Item 1
let itemsList = document.querySelector('#items');
let item1 = itemsList.firstElementChild;
//add hello before item 1
item1.textContent = "Hello " + item1.textContent;



