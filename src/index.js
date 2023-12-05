//DOM elements/ variables
const url = 'http://localhost:2000/pokemons'
const favoriteBtn = document.querySelector('#favorite-poke')
const newPokeForm = document.querySelector('#poke-form')
const pokeDetailName = document.getElementById("name")
const pokeDetailImage = document.getElementById("poke-image")
const pokeDetailType = document.getElementById("type")
const pokedexDetailNumber = document.getElementById("pokedex")
const pokeCollection = document.getElementById("collection_amount")
const deleteBtn = document.getElementById('delete-poke')
const pokeInfoDiv = document.getElementById('pokemon-info')
const pokeDetailDiv = document.getElementById('pokemmon-details')
let currentPoke
//fetches
fetch(url)
.then(response => response.json())
.then(pokeData => {
    pokeData.map(eachPoke => {
        addPokeToPage(eachPoke)
    })
    pokeDetails(pokeData[0])
})


//eventlisteners

deleteBtn.addEventListener('click', handleDelete)

newPokeForm.addEventListener('submit',(e) =>{
    e.preventDefault()
   let newPokeData = {
    name: e.target[0].value,
    type: e.target[1].value,
    image: e.target[2].value
   }

   fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokeData),
      })
      .then(response => response.json())
      .then(newPokeData => {
        addPokeToPage(newPokeData)
      });
      newPokeForm.reset()
})

 favoriteBtn.addEventListener('click', (e)=>{
    currentPoke.favorite = !currentPoke.favorite
    let updatedFav = {
        favorite: currentPoke.favorite
    }
    fetch(`http://localhost:2000/pokemons/${currentPoke.id}`,{
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFav)
    })
        .then(resp => resp.json())
        .then(updatedFavorite => {
            favoriteBtn.textContent = updatedFavorite.favorite? "Unfavorite": "Favorite"
        })    
 })


//render functions
function pokeDetails(pokemon){
    currentPoke = pokemon
    pokeDetailName.textContent = pokemon.name
    pokeDetailImage.src = pokemon.image 
    pokeDetailType.textContent = pokemon.type
    pokedexDetailNumber.textContent = "Pokedex: " + pokemon.pokedex
    pokeCollection.textContent = "Amount in collection: " + pokemon.collection_amount
    favoriteBtn.textContent = pokemon.favorite ? "Unfavorite": "Favorite"
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
