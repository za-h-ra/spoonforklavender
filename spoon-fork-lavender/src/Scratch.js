// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import "./App.css"

// export default function App() {
//   const APP_ID = "000b152e"
//   const API_KEY = "3a5ac123d9d8674a304c7074a28e2688"

//   const [recipes, updateRecipes] = useState([]);


//   const getRecipes = async () => {
//     const data = await axios(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
//     console.log(data.data.hits)
//     updateRecipes(data.data.hits);
    
//   }

  

//   useEffect(() => {
//     getRecipes()
// })


//   return (
//     <div className="App">
//       <form className="recipe-search">
//         <input className="search-bar" type="text" />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   )
// }