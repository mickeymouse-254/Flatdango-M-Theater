document.addEventListener('DOMContentLoaded', () => {
  const movieList = document.getElementById('movieList');

  fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => {
      data.forEach((movie, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="movie-number">${index + 1}.</span> ${movie.title}`;
        listItem.addEventListener('click', () => displayMovieDetails(movie));
        movieList.appendChild(listItem);
      });

      // Display the first movie's details by default
      if (data.length > 0) {
        displayMovieDetails(data[0]);
      }
    })
    .catch(error => console.error('Error:', error));
});

function displayMovieDetails(movie) {
  document.getElementById('poster').src = movie.poster;
 document.getElementById('movieTitle').textContent = movie.title;
  document.getElementById('movieRuntime').textContent = `Runtime: ${movie.runtime} minutes`;
  document.getElementById('movieShowtime').textContent = `Showtime: ${movie.showtime}`;
  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById('movieAvailableTickets').textContent = `Available Tickets: ${availableTickets}`;
}
