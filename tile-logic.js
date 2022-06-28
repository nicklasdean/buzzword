const highlightFirstTile = () => document.querySelectorAll(".tile")[0].focus();

const goToNextTile = (current) => {

}

const test = (tileIndex) => {
    highlightFirstTile();
}

document.querySelector("#test").addEventListener("click", test);


document.querySelectorAll(".tile").forEach((element, tileIndex) => {
    element.addEventListener("input",
        () => {
            goToNextTile(tileIndex)
        })
})

document.querySelectorAll(".tile").forEach((element, tileIndex) => {
    element.addEventListener("input",
        () => goToNextTile())
})