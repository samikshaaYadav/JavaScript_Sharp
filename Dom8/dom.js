//1.On clicking the delete button we should be able to remove the newly created li tag
//CREATE ADD LI ITEM
let form = document.getElementById('addForm'); //TO WRITE NAME OF LI IN FORM
let itemList = document.getElementById('items'); // TO ADD IN ITEMlIST



//ADD LISTENER TO ADD ITEM WHEN CLICK ON SUBMIT BUTTON
form.addEventListener('submit',addItem);  //ADD ITEM

//REMOVE LISTENER APPLIED ON RED CROSS SIGN  
itemList.addEventListener('click', removeItem); //REMOVE ITEM


function addItem(e){  
    e.preventDefault();

    let newItem = document.getElementById('item').value; //NEW ITEM-VALUE ADD
    //create new Li element
    let li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element X to newItem
    let deleteBtn = document.createElement('button');
    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li); //NEW ELEMENT ADDED
}
//TO DELETE ANY ELEMENT USING RED-CROSS SIGN
//REMOVE ITEM
//------------
function removeItem(e){
    //console.log(1); //using this we click on any particular item it will listen for whole  
    if(e.target.classList.contains('delete')){ //should only listen for cross button
        //console.log(1);
        if(confirm('Are you Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li); //li is child of itemList   
        }
    }
}

//2. is on index.html where edit button to add
