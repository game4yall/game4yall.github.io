document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "http://174.138.37.147:3000/api/collections/games/records"
  );

  const data = await response.json();
  const game = document.getElementById("search-result");

  renderGames(game, data.items);

  const search = document.getElementById("search-input");
  search.addEventListener("input", function (event) {
    // Changed event from 'keydown' to 'input' for real-time search
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase for case-insensitive search
    const filteredGames = data.items.filter((game) => {
      return game.name.toLowerCase().includes(searchValue);
    });
    renderGames(game, filteredGames);
  });
});

function renderGames(gameDiv, gamesData) {
  let innerHTML = "";
  gamesData.forEach((game) => {
    // Removed '.array' from 'gamesData'
    innerHTML += `
      <div class="col-xl-2 col-lg-3 col-md-4 col-6 grid-1">
        <a href="/games/${game.gameid}.html"> <!-- Fixed href attribute -->
          <div class="game-item">
            <div class="list-game new">
              <div class="list-thumbnail">
                <img src="${game.img}" class="small-thumb lazyload"> <!-- Fixed src attribute -->
              </div>
              <div class="list-info">
                <div class="list-title ellipsis">${game.name}</div> <!-- Removed unnecessary quotes -->
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
  });
  gameDiv.innerHTML = innerHTML;
}
