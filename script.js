const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);


// const bListPkmn = pokemon.filter(p => p.name[0] === "B");
// console.log(bListPkmn);
// const pkmnIds = pokemon.map(p => p.id)
// console.log(pkmnIds);


// Una serie de objetos Pokémon donde la identificación es divisible por 3

const pokemon2 = pokemon.filter(p => p.id % 3 === 0);
console.log(pokemon2);

// una serie de objetos Pokémon que son del tipo "fuego"

const pokemon3 = pokemon.filter(p => p.types.find(q => q === "fire"));
console.log(pokemon3);

// Una variedad de objetos Pokémon que tienen más de un tipo

const pokemon4 = pokemon.filter(p => p.types.length > 1);
console.log(pokemon4);

// una matriz con solo los nombres de los Pokémon

const pokemon5 = pokemon.map(p => p.name);
console.log(pokemon5);

// Una matriz con solo los nombres de Pokémon con una identificación mayor que 99

const pokemon6 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(pokemon6);

// una matriz con solo los nombres del pokémon cuyo único tipo es veneno

const pokemon7 = pokemon.filter(p => p.types.find(q => q === "poison")).filter(p => p.types.length === 1).map(p => p.name);
console.log(pokemon7);

// una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"

const pokemon8 = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
console.log(pokemon8);

// un recuento de la cantidad de pokémon que son de tipo "normal"

const pokemon9 = pokemon.filter(p => p.types.find(q => q === "normal"));

console.log(pokemon9.length);