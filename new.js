async function getData(url) {
    const response = await fetch(url);
  
    return response.json();
  } 
const firstNamesList = await getData('./first_names.json');
const lastNamesList = await getData('./last_names.json');
const citiesList = await getData('./city_chance.json');
  
function Lister(dict, list){
    for (const [key, value] of Object.entries(dict)){
        for (let i = 0; i < value; i++){
            list.push(key);
        }
    }

}


class Player {
    constructor(name, height, weight, city) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.city = city;
    }
}

let firstNames = [];
let lastNames = [];
let cities = [];
Lister(firstNamesList, firstNames);
Lister(lastNamesList, lastNames);
Lister(citiesList, cities);
function genName() {
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return firstName + ' ' + lastName 
}

function genCity() {
    let city = cities[Math.floor(Math.random() * cities.length)];
    return city
}

function randomStd() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}



function genHeightWeight() {
    var height = 0;
    var weight = 0
    let baseHeight = 74.15;
    let stdDev = 1.55;
    height = baseHeight + (randomStd() * stdDev);
    weight = height * ((randomStd() * .15 + .05) + 2.80);
    return [Math.round(height), Math.round(weight)];
}

export function genPlayer() {
    let name = genName();
    let heightWeight = genHeightWeight();
    let city = genCity()
    var player = new Player(name, heightWeight[0], heightWeight[1], city)
    return [player.name, player.height, player.weight, player.city]
}