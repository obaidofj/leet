
// Display Movie Catalog: Read movie data from a JSON file and display a list of movies in the catalog.

// Add New Movie: Allow users to add new movies to the catalog by providing details such as title, director, 
//release year, and genre. The movie data should be stored in the JSON file.

// Update Movie Details: Enable users to edit the details of a specific movie by selecting the movie from the catalog 
//and updating its properties like title, director, release year, and genre.

// Delete Movie: Allow users to remove a movie from the catalog by selecting the movie and deleting it from the JSON file.

// Search and Filter: Implement search functionality that allows users to search for movies by title, director, or genre. 
//Additionally, provide options for filtering the movie catalog based on specific criteria like genre or release year.

// Fetch Movie Data: Utilize the Fetch API to make HTTP requests to a movie database API (such as OMDB API) to fetch additional 
//movies from the API and store it in the JSON file.

import prompt from 'prompt-sync';

const input = prompt();

function printProgramMenu()
{
console.log(`
***************************
    Welcome to Movies Catalog APP
    ***************************
    Select an action:
    1) Display Movies Catalog
    2) Add New Movie
    3) Update Movie Details
    4) Delete Movie
    5) Search and Filter Movies
    6) Fetch Movie Data From Server
    7) Load Previouse Data
    8) Quite
    ***************************
    What's your choice?
`);
}


function main()
{
    while(true)
    {
    printProgramMenu();
    const choice = input();
    switch (choice) {
        case "1":
          displayCatalog();
          break;
        case "2":
          addNewMovie();
          break;
        case "3":
          updateMoveDeials();
          break;
        case "4":
          deleteMovie();
          break;
        case "5":
          searchAnd();
          break;
        case "7":
          sortTaskByID();
          break;
        case "8":
          clearAllTasks();
          break;
        case "0":
          return;
  
        default:
          break;
      }
    }
}

main();