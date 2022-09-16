function showSubsection(subsectionNumber) {
    gameSubDescriptions = document.getElementsByClassName("subsection-description");
    for (let i = 1; i <= 3; i++) {
        gameSubDescriptions[i - 1].style.display = i === subsectionNumber ? 'table' : 'none';
    }
}