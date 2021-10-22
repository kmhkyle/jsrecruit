import {genPlayer} from "./new.js"

// async function getData(url) {
//     const response = await fetch(url);
  
//     return response.json();
//   } 
// const firstNamesList = await getData('./first_names.json');
// const lastNamesList = await getData('./last_names.json');
  
// function Lister(dict, list){
//     for (const [key, value] of Object.entries(dict)){
//         for (let i = 0; i < value; i++){
//             list.push(key);
//         }
//     }

// }
// let firstNames = [];
// let lastNames = [];
// Lister(firstNamesList, firstNames)
// Lister(lastNamesList, lastNames)
// function genName() {
//     let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
//     let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
//     return firstName + ' ' + lastName 
// }
const listOfPlayers = [];
for (let i = 0; i < 10; i++) {
    listOfPlayers.push(genPlayer());
}


document.getElementById('test').innerHTML = genPlayer();