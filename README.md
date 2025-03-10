# Cine_Explorer

Cine_Explorer is a simple movie search application that fetches movie details from the OMDB API. Users can search for movies by title and view details such as the poster, rating, and more.

## Features
- Search for movies by title
- Display movie posters
- Show movie ratings

## Technologies Used
- HTML
- CSS
- JavaScript
- OMDB API

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/fahimHexClan/Cine_Explorer-.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Cine_Explorer
   ```
3. Open `index.html` in your browser.

## How to Use
- Enter a movie title in the input field.
- Click the **Submit** button to fetch movie details.
- View the movie poster and rating displayed on the page.

## API Key Configuration
- Ensure you have a valid OMDB API key.
- Update `index.js`:
  ```js
  let url = `http://www.omdbapi.com/?apikey=YOUR_API_KEY&t=${movieName}`;
  ```
- Replace `YOUR_API_KEY` with your actual API key.

## Contributing
Feel free to fork the repository and submit pull requests to improve the project!

## License
This project is licensed under the MIT License.

