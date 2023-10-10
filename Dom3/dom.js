//EXAMINE THE DOCUMET OBJECT
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;         //to change title 
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);


//GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// console.log(header);

// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Goodbye";

// //DIFF BTN INNERTEXT VS TEXTCONTENT ()
// console.log(headerTitle.textContent)  //Item Lister 123 //not pays attention to styling
// console.log(headerTitle.innerText)    //Item Lister  //pays attention to styling 
//headerTitle.innerHTML = '<h3>Hello</h3>';   

//STYLE CHANGES
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';  //items 2 names change to hello 2
// items[1].style.fontWeight = 'bold';
// //items[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < items.length; i++){   //for every items setting bg to grey
// items[i].style.backgroundColor = 'grey';
// }


//GETELEMENTBYTAGNAME //
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';  //items 2 names change to hello 2
// li[1].style.fontWeight = 'bold';
// //li[1].style.backgroundColor = 'green';

// for(let i = 0; i < li.length; i++){   //for every items setting bg to grey
// li[i].style.backgroundColor = 'green';
// }


//QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let nthItem = document.querySelector('.list-group-item:nth-child(2)');
// nthItem.style.color = 'yellow';



//OUERYSELECTORALL  SIMILAR TO TAGNAME AND CLASSNAME //
let titles = document.querySelectorAll('.title');
console.log(titles);

let odd = document.querySelectorAll('li:nth-child(odd)');  //to make items list odd grey
let even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "grey";
    even[i].style.backgroundColor = "#ccc";   
}

