document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "http://174.138.37.147:3000/api/collections/games/records"
  );

  const data = await response.json();
  const game = document.getElementById("container-fluid container-section");

  renderGames(game, data.items);
  const search = document.getElementById("form-control search");
  search.addEventListener("keydown", function (event) {
    const searchValue = event.target.value;
    const filteredGames = data.items.filter((game) => {
      return game.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    renderGames(game, filteredGames);
  });
});

function renderGames(gameDiv, gamesData) {
  let innerHTML = "";
  gamesData.array.forEach((game) => {
    innerHTML += `

    <div class="section-title">
						<h3>
							 Search Results
						</h3>
					</div>
					<div class="row listing" id="listing1">

						<div class="col-xl-2 col-lg-3 col-md-4 col-6 grid-1">
							<a href="/games/"${game.gameid}".html">
								<div class="game-item">
									<div class="list-game new">
										<div class="list-thumbnail">
											<img src=""${game.img}".jpg"
												class="small-thumb lazyload">
										</div>
										<div class="list-info">
											<div class="list-title ellipsis">"${game.name}"</div>
										</div>
									</div>
								</div>
							</a>
						</div>

					


					</div>

        `;
  });
  gameDiv.innerHTML = innerHTML;
}
