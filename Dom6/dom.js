
// QUERY SELECTOR //
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

//1. Make the 2nd item have green background color
let secondItem = document.querySelector('.list-group-item:nth-child(2)');//item2
secondItem.style.color = 'green';

//2. Make the 3rd item invisible
let thirdItem = document.querySelector('.list-group-item:nth-child(3)');//item3
thirdItem.style.display = 'none';



