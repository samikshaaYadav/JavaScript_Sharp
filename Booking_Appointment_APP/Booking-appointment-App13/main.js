//DOM 13 - ADD DELETE BUTTON TO DELETE FROM LOCAL STORAGE AND BROWSER

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
    
//1. TO ADD DELETE BUTTON
//-------------------------
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = "Delete";  //creating delete button
    deleteBtn.style.color = 'black';
    deleteBtn.style.backgroundColor = 'grey';

    deleteBtn.onclick = () => {
        localStorage.removeItem(name);   //particular user
        sectionList.removeChild(list);
    }

    list.appendChild(listtext);  
    list.appendChild(deleteBtn);    
    sectionList.appendChild(list); 


    console.log(listtext); //printing it on console
}
