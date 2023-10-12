//DOM 11 
//1. Write logic to store the details entered by the user in the local storage when he clicks on submit.
//Now try storing the user details as an object in the local storage.

let myForm = document.getElementById('my-form');
let msg = document.querySelector('.msg');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let userList = document.getElementById('users');

//Listen for Form Submit
myForm.addEventListener('submit' , onSubmit);

//TO ADD VALUES IN LOCAL STORAGE  
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value === ""){ //if input has blank value
        //Display an error message
        msg.classList.add('error');
        msg.textContent = 'Please enter all fields';
    }
    else
    {
        //get user input values
        let name = e.target.name.value;
        let email = e.target.email.value;
        //localStorage.setItem(name , email);  //adding name and email as a string in localStorage        
    
        //to store it in objects for bigger data 
        let user = 
        {
            name,
            email
        };
        localStorage.setItem(user.name , JSON.stringify(user));
        localStorage.clear();
    }
};