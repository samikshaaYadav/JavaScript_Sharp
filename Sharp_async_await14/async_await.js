// console.log('person1: shows ticket');
// console.log('person2: shows ticket');
// const promiseWifeBringingTicets = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(`Ticket + `);

//     },3000);
// });
// const getPopcorn = promiseWifeBringingTicets.then((t) => {
//     console.log("wife: I have the Tickets");
//     console.log("husband: we should go in");
//     console.log("wife: no I am hungry");
//     return new Promise((resolve,reject) => {
//         resolve(`${t} Popcorn + `);
//     });
// });
// const getButter = getPopcorn.then((t) => {
//     console.log("husband: I got some Popcorns");
//     console.log("husband: we should go in");
//     console.log("wife: I need butter on my Popcorn");
//     return new Promise((resolve,reject) => {
//         resolve(`${t} Popcorn with Butter + `);
//     });
// });
// const getColdDrinks = getButter.then((t) => {
//     console.log("husband: I have added butter on Popcorns");
//     console.log("husband: we should go in");
//     console.log("wife: Now I also want Cold Drink");
//     return new Promise((resolve,reject) => {
//         resolve(`${t} Cold Drink`);
//     });
// });
// getColdDrinks.then((t) => console.log(t));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');
// Async Await

// "Async Function always returns a `Promise` "



console.log('person1: shows ticket');
console.log('person2: shows ticket');
const perMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)    
    });
    const getPopcorn = new Promise((resolve, reject) =>resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) =>resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrink`));


  let ticket = await promiseWifeBringingTicks;    
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

  let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);    
    console.log('husband: we should go in');
    console.log('wife: I need some butter on my popcorn');

  let butter = await addButter;
    console.log(`husband: i got some ${butter} on popcorn`);

    console.log(`husband: anything else love?`);
    console.log(`wife: Yes i want cold drink`);

  let coldDrink = await getColdDrinks;
    console.log(`husband: i got ${coldDrink}`);
    console.log(`husband: anything else love?`);
    console.log(`wife: lets go in we are getting late`);
    console.log(`husband: thank you for the reminder grins`);
    return ticket;  
}
perMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
