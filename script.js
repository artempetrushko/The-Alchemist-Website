const formState = {
    Block : 'block',
    Flex : 'flex',
    Hidden : 'none'
};

var authorizationSection = document.getElementById("authorization-section");
var authorizationForm = document.getElementById('authorization-form');
var registrationForm = document.getElementById('registration-form');
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
    authorizationSection.style.display = formState.Flex;
    authorizationForm.style.display = formState.Block;
    registrationForm.style.display = formState.Hidden;
}

function hideAuthorizationForm() {
    toggleAuthorizationForm(formState.Hidden);
}

function showRegistrationForm() {
    toggleRegistrationForm();
}

function toggleAuthorizationForm(state) {
    if (!isMouseOverForm) {
        authorizationSection.style.display = state;
    }
}

function toggleRegistrationForm() {
    authorizationForm.style.display = formState.Hidden;
    registrationForm.style.display = formState.Block;
}

function closeForms() {
    authorizationForm.style.display = formState.Hidden;
    registrationForm.style.display = formState.Hidden;
    authorizationSection.style.display = formState.Hidden;
}