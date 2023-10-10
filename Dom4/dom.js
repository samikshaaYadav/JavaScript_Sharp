
//GETELEMENTSBYCLASSNAME //

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//items[1].textContent = 'Hello 2';  //items 2 names change to hello 2
for(let i = 0; i < items.length; i++){   //for every items setting bold
    items[i].style.fontWeight = 'bold';
}
items[2].style.backgroundColor = 'green';  //setting 2 items to green



