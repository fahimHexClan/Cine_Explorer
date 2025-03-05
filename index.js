function Submit() {
    let movieInput = document.getElementById("input").value.trim();

    if (movieInput === "") {
        alert("Please enter a movie name!");
        return;
    }

    let url = `http://www.omdbapi.com/?apikey=f19c016b&t=${encodeURIComponent(movieInput)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                alert("Movie not found!");
                return;
            }

            document.getElementById("Poster").src = data.Poster;
            document.getElementById("Title").innerText = data.Title;
            document.getElementById("Rating").innerText = data.imdbRating;
            document.getElementById("Year").innerText = data.Year;
            document.getElementById("Genre").innerText = data.Genre;
            document.getElementById("Director").innerText = data.Director;
            document.getElementById("Plot").innerText = data.Plot;

            document.getElementById("movie-card").style.display = "block";
        })
        .catch(error => console.error("Error fetching movie:", error));
}
