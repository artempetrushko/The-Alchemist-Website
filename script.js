const formState = {
    Shown : 'block',
    Hidden : 'none'
};

var authorizationSection = document.getElementById("authorization-section");
var authorizationForm = document.getElementById('authorization-form')
var isMouseOverForm = false;

authorizationForm.addEventListener('mouseenter', function(e) {
    isMouseOverForm = true;
});
authorizationForm.addEventListener('mouseleave', function(e) {
    isMouseOverForm = false;
});

function showSubsection(subsectionNumber) {
    gameSubDescriptions = document.getElementsByClassName("subsection-description");
    for (let i = 1; i <= 3; i++) {
        gameSubDescriptions[i - 1].style.display = i === subsectionNumber ? 'table' : 'none';
    }
}

function showAuthorizationForm() {
    toggleAuthorizationForm(formState.Shown);
}

function hideAuthorizationForm() {
    toggleAuthorizationForm(formState.Hidden);
}

function toggleAuthorizationForm(state) {
    if (!isMouseOverForm) {
        authorizationSection.style.display = state;
    }
}