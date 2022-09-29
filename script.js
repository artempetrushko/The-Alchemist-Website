var authorizationSection = $('.authorization-section');
var authorizationForm = $('.authorization-form');
var registrationForm = $('.registration-form');
var lastOpenedForm = null;

$('.main-photo').attr("src", "resources/gallery-photo-1.png");
$('.additional-photo.photo-1').css('border', '2px solid white')
                              .css('transform', 'scale(1.1)');

$('.user-info').hide();
$('.feedback-form').hide();

showSubsection(1);

$('.additional-photo').click(function() {
    var imageSource = $(this).attr("src");
    $('.main-photo').attr("src", imageSource);

    for (var i = 1; i <= 4; i++) {
        var currentPhoto = $('.additional-photo.photo-' + i);      
        currentPhoto.css('border', currentPhoto.is($(this)) ? '2px solid white' : 'none');
        currentPhoto.css('transform', currentPhoto.is($(this)) ? 'scale(1.1)' : 'none');
    }
});

function showSubsection(subsectionNumber) {
    gameSubDescriptions = $('.subsection-description');
    for (var i = 1; i <= gameSubDescriptions.length; i++) {
        gameSubDescriptions.eq(i - 1).css('display', i === subsectionNumber ? 'table' : 'none');
        if (i === subsectionNumber) {
            $('.subsection-ref.subsection-ref-' + i).addClass('focused');
        } else {
            $('.subsection-ref.subsection-ref-' + i).removeClass('focused');
        }
    }
}

function showAuthorizationSection(selectedForm) {
    authorizationSection.fadeIn().css('display', 'flex');
    lastOpenedForm = selectedForm;
    selectedForm.fadeIn(400);
}

function hideAuthorizationSection(currentForm) {
    currentForm.fadeOut(300, function() {
        authorizationSection.fadeOut();
    });
}

function showAuthorizationForm() {
    showNewForm(authorizationForm);
}

function showRegistrationForm() {
    showNewForm(registrationForm);
}

function showNewForm(newForm) {
    hideAndChangeLastOpenedForm(newForm);
    newForm.fadeIn();
}

function hideAndChangeLastOpenedForm(newForm) {
    lastOpenedForm.fadeOut(function() {
        lastOpenedForm = newForm;
    }); 
}