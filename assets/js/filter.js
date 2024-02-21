document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "http://174.138.37.147:3000/api/collections/games/records"
  );

  const data = await response.json();
  const game = document.getElementById("search-result");

  renderGames(game, data.items);

  const search = document.querySelector(".form-control.search");
  search.addEventListener("input", function (event) {
    const searchValue = event.target.value.toLowerCase(); // Convert search value to lowercase
    const filteredGames = data.items.filter((game) => {
      return game.name.toLowerCase().includes(searchValue);
    });
    renderGames(game, filteredGames);
  });
});

function renderGames(gameDiv, gamesData) {
  let innerHTML = "";
  gamesData.forEach((game) => {
    innerHTML += `
    <div class="section-title">
      <h3>Search Results</h3>
    </div>
    <div class="row listing" id="listing1">
      <div class="col-xl-2 col-lg-3 col-md-4 col-6 grid-1">
        <a href="/games/${game.gameid}.html">
          <div class="game-item">
            <div class="list-game new">
              <div class="list-thumbnail">
                <img src="${game.img}.jpg" class="small-thumb lazyload">
              </div>
              <div class="list-info">
                <div class="list-title ellipsis">${game.name}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>`;
  });
  gameDiv.innerHTML = innerHTML;
}
