//DOM 14 - ADD EDIT BUTTON FROM LOCAL STORAGE AND BROWSER UI

let myForm = document.getElementById('my-form');
let msg = document.querySelector('.msg');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let sectionList = document.getElementById('section');


//Listen for Form Submit
myForm.addEventListener('submit' , onSubmit);

//TO ADD VALUES IN LOCAL STORAGE  
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === ''){ //if input has blank value
        //Display an error message
        msg.classList.add('error');
        msg.textContent = 'Please enter all fields';
    }
    else
    {
        //get user input values
        let name = e.target.name.value;
        let email = e.target.email.value;
        let phone = e.target.phone.value;
        //localStorage.setItem(name , email);  //adding name and email as a string in localStorage        
    
        //to store it in objects for bigger data 
        let user = 
        {
            name,
            email,
            phone
        };
        localStorage.setItem(user.name , JSON.stringify(user)); 
    }
};

//To display entries on browser
myForm.addEventListener('submit' , onSubmitDisplay);
function onSubmitDisplay(e){
    //get user input values
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;

    let list = document.createElement('li');

    let listtext = document.createTextNode(name+" - "+email+" - "+phone);
    
//TO ADD DELETE BUTTON
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = "Delete";  //creating delete button
    deleteBtn.style.color = 'black';
    deleteBtn.style.backgroundColor = 'grey';

    deleteBtn.onclick = () => {
        localStorage.removeItem(name);   //particular user
        sectionList.removeChild(list);
    }

//1. TO ADD EDIT BUTTON
//----------------------
    let editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = "Edit";  //creating delete button
    editBtn.style.color = 'black';
    editBtn.style.backgroundColor = 'grey';

    editBtn.onclick = () => {
        localStorage.removeItem(name);   //particular user
        sectionList.removeChild(list);
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
    }

    list.appendChild(listtext);  
    list.appendChild(deleteBtn);    
    list.appendChild(editBtn);
    sectionList.appendChild(list); 
  
    console.log(listtext); //printing it on console
}
