const main = function () {
    const gameListElement = document.querySelector("#gameList");

    gameListElement.innerHTML = "";
    games.forEach(function (game) {
        const {
            title,
            desc,
            image
        } = game;
        const gameElement = document.createElement("div");
        gameElement.innerHTML = `<a href="detail/" style="text-decoration: none;"><div class="grid-item hoverFocus" style="background-image: url(${image})">
              <p>${title}</p>
              <p>${desc}</p>
              </div>
              </a>`;
        gameListElement.appendChild(gameElement);
    });
};