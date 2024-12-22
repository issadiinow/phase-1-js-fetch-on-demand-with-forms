const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();  // Prevent the form from submitting and refreshing the page
      const input = document.querySelector("input#searchByID");  // Get the value from the input field
  
      // Fetch movie data based on the input ID
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");  // Access the title element
          const summary = document.querySelector("section#movieDetails p");  // Access the summary element
  
          // Display the movie details in the page
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle case where no movie is found or the ID is invalid
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Movie not found";
          summary.innerText = "Please try a valid movie ID.";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);  // Run init function once the DOM is fully loaded
  