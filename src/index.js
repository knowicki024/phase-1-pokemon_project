//DOM elements/ variables
const url = ' http://localhost:3000/pokemons'
const favoriteBtn = document.querySelector('#favorite-poke')
const newPokeForm = document.querySelector('#poke-form')

//fetches
fetch(url)
.then(response => response.json())
.then(pokeData => {
    pokeData.map(eachPoke => {
        addPokeToPage(eachPoke)
    })
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



//render functions



//callback functions
// // function toggle(e){
//     // e.target.textContent =! e.target.textContent
//     // e.target.textContent = e.target.textContent ? "Favorite" : "Not Favorite"
    
// }

