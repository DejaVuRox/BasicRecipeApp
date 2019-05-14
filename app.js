const btnSearch = document.querySelector(".btn-search");
const url = "https://www.food2fork.com/api/search";
const key = "3ca8d40cf79b022cc1c54279cd51be82";
const results = document.querySelector(".results");
const input = document.querySelector("#search");
let data = [];

init = () => {
  getRecipe();
};

getRecipe = () => {
  btnSearch.addEventListener("click", function() {
      // my search is in equal to const searchValue
    const searchValue = input.value;
        //fetching info using my 'key' & searchValue & limit to 6 results
    fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${searchValue}&count=6`
    )
      // receiving a respond & parsing
      .then(res => res.json())
      // taking the parsed info 'result' and implementing in to a function
      .then(result => {
        // creating a const to hold recipes from the parsed info
        const recipes = result.recipes;
        // running a 'forEach' callback function on each element in the array
        recipes.forEach(elem => {
          //adding for each element an HTML structure (using ticks)
          data += `<div class = "wrapper">
                <div class = "recipe">
                <h2>${elem.title}</h2>
                <img src="${elem.image_url}">
                <div class="info">
                <h4>Publisher:${elem.publisher} </h4>
                <a class="btn-source" href="${elem.source_url}">Source</a>
                </div>
                </div>
                </div>
                `;
        });

        //putting the outcome in the div 'results'
        results.innerHTML = data;
        //if no result where found
          if (data.length === 0) {
             alert("no result");
         }
      })
      data = [];
  });
};


init();

