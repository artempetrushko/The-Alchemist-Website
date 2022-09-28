const formState = {
    Block : 'block',
    Flex : 'flex',
    Hidden : 'none'
};

var authorizationSection = document.getElementById("authorization-section");
var authorizationForm = document.getElementById('authorization-form');
var registrationForm = document.getElementById('registration-form');
var isMouseOverForm = false;

$('.main-photo').attr("src", "resources/gallery-photo-1.png");

$(function() {
    $('.subsection-ref.subsection-ref-1').focus();
});

function showSubsection(subsectionNumber) {
    gameSubDescriptions = document.getElementsByClassName("subsection-description");
    for (let i = 1; i <= 3; i++) {
        gameSubDescriptions[i - 1].style.display = i === subsectionNumber ? 'table' : 'none';
    }
}

function showAuthorizationSection() {
    authorizationSection.style.display = formState.Flex;
    changeFormsState(formState.Block, formState.Hidden);
}

function hideAuthorizationSection() {
    changeFormsState(formState.Hidden, formState.Hidden);
    authorizationSection.style.display = formState.Hidden;
}

function showAuthorizationForm() {
    changeFormsState(formState.Block, formState.Hidden);
}

function showRegistrationForm() {
    changeFormsState(formState.Hidden, formState.Block);
}

function changeFormsState(authFormState, regFormState) {
    authorizationForm.style.display = authFormState;
    registrationForm.style.display = regFormState;
}

$('.additional-photo').click(function() {
    var imageSource = $(this).attr("src");
    $('.main-photo').attr("src", imageSource);

    for (var i = 1; i <= 4; i++) {
        var currentPhoto = $('.additional-photo.photo-' + i);      
        currentPhoto.css('border', currentPhoto.is($(this)) ? '2px solid white' : 'none');
    }
});