# Flatdango-M-Theater
Flatdango Movie Theater is a web application that allows users to purchase movie tickets from the theater. Users can view movie details, including the poster, title, runtime, showtime, and available tickets. The application fetches data from a local server running JSON DB server to retrieve movie information.

# Installation 
To run the Flatdango Movie Theater application, follow these steps:
    1.Clone the GitHub repository:
    2.Open the project folder:
    3.Install the necessary dependencies:
        >npm install
    4.Start the local server:
        >npm start
    5.Open a web browser and visit http://localhost:3000 to access the Flatdango Movie Theater application.

# Usage
Upon opening the application, you will see the first movie's details, including the movie poster, title, runtime, showtime, and available tickets. The number of available tickets is calculated by subtracting the number of tickets sold from the theater's capacity.

On the left side of the page, there is a movie menu displaying a list of all movies. You can click on a movie from the menu to view its details.

To purchase a ticket, click the "Buy Ticket" button. The number of available tickets will decrease accordingly. Note that this feature does not persist the data and is for demonstration purposes only.

# Technologies Used
HTML
CSS
JavaScript
