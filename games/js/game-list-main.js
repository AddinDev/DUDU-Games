const main = function () {
    const gameListElement = document.querySelector("#gameList");

    gameListElement.innerHTML = "";
    games.forEach(function (game) {
        const {
            title,
            desc,
            image,
            gamepage
        } = game;
        const gameElement = document.createElement("div");
        gameElement.innerHTML = 
        `
        <a href="${gamepage}" style="text-decoration: none;">
            <div class="grid-item hoverFocus" style="background-image: url(${image});">
                <div class="textItems">
                    <h4 class="textItems" style="background-color:white;">${title}</h4>
                </div>
                
            </div>
        </a>`;
        gameListElement.appendChild(gameElement);
    });
};