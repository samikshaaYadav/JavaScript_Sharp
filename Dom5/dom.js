//GETELEMENTSBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// for(let i = 0; i < items.length; i++){   //for every items setting bg to grey
// items[i].style.backgroundColor = 'grey';//except for item not having class name
// }


//GETELEMENTBYTAGNAME //
let li = document.getElementsByTagName('li');
console.log(li);

for(let i = 0; i < li.length; i++){   //for every li items setting bg to green here we use tagname
li[i].style.backgroundColor = 'green';
}