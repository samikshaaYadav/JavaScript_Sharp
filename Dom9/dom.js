//CREATE ADD LI ITEM
let form = document.getElementById('addForm'); //TO WRITE NAME OF LI IN FORM
let itemList = document.getElementById('items'); // TO ADD IN ITEMlIST

//ADD LISTENER TO ADD ITEM WHEN CLICK ON SUBMIT BUTTON
form.addEventListener('submit',addItem);  //ADD ITEM

//REMOVE LISTENER APPLIED ON RED CROSS SIGN  
itemList.addEventListener('click', removeItem); //REMOVE ITEM

//ADD ITEM-DESCRIPTION
//2.Now go ahead and take description of the item too in the input box where you are creating the item
function addItem(e)
{  
    e.preventDefault();
    let newItem = document.getElementById('item').value; //NEW ITEM-VALUE 
    let newItemDescription = document.getElementById('item-description').value;//NEW ITEM-Description ADD
    //create new Li element
    let li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    console.log(li);

//Add text node with input value
//3.When you are displaying the item show the description of the item below that.     
    li.appendChild(document.createTextNode(newItem+' '+newItemDescription));
    
//Add delete button element X for newItem
    let deleteBtn = document.createElement('button');
//Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
//Append button to li
    li.appendChild(deleteBtn);

//Add edit button for newItem
    //<!--2. Now add an edit button next to the delete icon.[Dont have to build the Edit  functionality, just add the button] -->
//Create delete button element X to newItem
    let EditBtn = document.createElement('button');
//Add classes to del button
    EditBtn.className = 'btn btn-dark float-right edit';
//Append text node
    EditBtn.appendChild(document.createTextNode('Edit'));
//Append button to li   
    li.appendChild(EditBtn);

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

// FILTER ITEMS USING SEARCH 
//1. When we type on the input box show me those items from the list which match my search string

//FILTER ITEMS AND DESCRIPTION USING SEARCH
//4. Now when we try to search, check both the name of the item and the description. If search string is found in any place show the item
let filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems); //FILTER ITEM

//FILTER ITEMS on Search Items and description  
function filterItems(e)
{
//Convert text to lowercase
    let text = e.target.value.toLowerCase();//CONVERTING TEXT WRITTEN INTO SEARCH ITEMS TO LOWERCASE
    
//Get lis
    var items = itemList.getElementsByTagName('li');//every time i write anything on search items li 1 2 3 4  will be appear
//Convert to an array
    Array.from(items).forEach(function(item)
    {
        let itemName = item.firstChild.textContent; //to-filter by item-name
        let itemDescription = item.lastChild.textContent; //to-filter by item-description 
        
//Compare the itemName to search items typing
        if(itemName.toLowerCase().indexOf(text)!= -1 || itemDescription.toLowerCase().indexOf(text)!= -1 ){
            item.style.display = 'block';  //if match that li should be display
        }
        else
        {
            item.style.display = 'none';//if not matched nothing should be display
        }
    });
}
