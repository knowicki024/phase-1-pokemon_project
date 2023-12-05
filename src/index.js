//DOM elements/ variables
const url = ' http://localhost:2000/pokemons'
const favoriteBtn = document.querySelector('#favorite-poke')
const newPokeForm = document.querySelector('#poke-form')

const pokeDetailName = document.getElementById("name")
const pokeDetailImage = document.getElementById("poke-image")
const pokeDetailType = document.getElementById("type")
const pokedexDetailNumber = document.getElementById("pokedex")
const pokeCollection = document.getElementById("collection_amount")
const deleteBtn = document.getElementById('delete-poke')
const pokeInfoDiv = document.getElementById('pokemon-info')

//fetches
fetch(url)
.then(response => response.json())
.then(pokeData => {
    pokeData.map(eachPoke => {
        addPokeToPage(eachPoke)
    })
    pokeDetails(pokeData[0])
})

// //post fetch
// fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => console.log(data));



//eventlisteners
//  favoriteBtn.addEventListener('click', toggle)
deleteBtn.addEventListener('click', handleDelete)


//render functions
function pokeDetails(pokemon){
    pokeDetailName.textContent = pokemon.name
    pokeDetailImage.src = pokemon.image 
    pokeDetailType.textContent = pokemon.type
    pokedexDetailNumber.textContent = pokemon.pokedex
    pokeCollection.textContent = pokemon.collection_amount
}
function addPokeToPage(pokemon){
    const pokeList = document.getElementById("pokemon-list")
    const pokeImage = document.createElement("img")
    pokeImage.src = pokemon.image 
    pokeList.appendChild(pokeImage)

    pokeImage.addEventListener("click", () => {
        pokeDetails(pokemon)
    })
}

//callback functions
// // function toggle(e){
//     // e.target.textContent =! e.target.textContent
//     // e.target.textContent = e.target.textContent ? "Favorite" : "Not Favorite"
    
// }

function handleDelete(){
    pokeInfoDiv.remove()
    deleteBtn.remove()
        alert('Pokemon removed from Collection!')
    }
