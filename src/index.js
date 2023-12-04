//DOM elements/ variables
const url = 'http://127.0.0.1:2000/pokemons'
const favoriteBtn = document.querySelector('#favorite-poke')
const newPokeForm = document.querySelector('#poke-form')
const deleteBtn = document.getElementById('delete-poke')
const pokeInfoDiv = document.getElementById('pokemon-info')
//fetches

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
