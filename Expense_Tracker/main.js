//Expense Tracker application with adding, displaying , deleting and editing functionalities.

let myForm = document.getElementById('my-form');
let msg = document.querySelector('.msg');
let amount = document.getElementById('amount');
let description = document.getElementById('description');
let category = document.getElementById('category');
let list = document.getElementById('list');

//Listen for Add Expense
myForm.addEventListener('submit' , onSubmit);

//To Add values in Local Storage 
function onSubmit(e) {
    e.preventDefault();

    if(amount.value === "" || description.value === "" || category.value === ""){ //if input has blank value
        //Display an error message
        msg.classList.add('error');
        msg.textContent = 'Please enter all fields';
    }
    else
    {
        //get user input values
        let amount = e.target.amount.value;
        let description = e.target.description.value;
        let category = e.target.category.value;

        // store single user
        //localStorage.setItem(amount , description , category);  //adding name and email as a string in localStorage        
    
        //to store objects
        let user = {
            amount,
            description,
            category
        };
        localStorage.setItem(user.amount + "-" + user.description + "-" + user.category, JSON.stringify(user));
        onSubmitDisplay(user);        
    }  
}
//to display details 
function onSubmitDisplay(user)
{
    let li = document.createElement('li');
    let details = document.createTextNode(`${amount.value} - ${description.value} - ${category.value}`);

    //TO ADD DELETE BUTTON Functionailty
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = "Delete";  //creating delete button
    deleteBtn.style.color = 'white';
    deleteBtn.style.backgroundColor = 'red';

    deleteBtn.onclick = () => {
        localStorage.removeItem(user.amount + "-" + user.description + "-" + user.category);   //particular user
        list.removeChild(li);
    }
    //TO EDIT BUTTON Functionailty
    const editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "Edit";
    editBtn.style.color = 'black';
    editBtn.style.backgroundColor = 'skyblue';

    editBtn.onclick = () => {
        localStorage.removeItem(user.amount + "-" + user.description + "-" + user.category);
        list.removeChild(li);
        document.getElementById('amount').value = user.amount;
        document.getElementById('description').value = user.description;
        document.getElementById('category').value = user.category;
    }
    li.appendChild(details);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);

    console.log(details);

    //clear fields
    // Clear Fields 
    amount.value = '';
    description.value = '';
    category.value = '';
}
