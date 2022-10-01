var authorizationSection = $('.authorization-section');
var authorizationForm = $('.authorization-form');
var registrationForm = $('.registration-form');
var feedbackSendForm = $('.feedback-send-form');
var galleryCarousel = $('.gallery-carousel');
var lastOpenedForm = null;

var selectedPhotoNumber = 1;
var galleryCarousel_LeftBorder = 1;
var galleryCarousel_RightBorder = 4;
var galleryPhotosCount = 7;

$('.main-photo').attr("src", "resources/gallery-photo-1.png");
changeGalleryPhotoStyle(1, true);
setArrowButtonVisibility();

$('.user-info').hide();
$('.feedback-form').hide();

showSubsection(1);

for (var i = 5; i <= galleryPhotosCount; i++) {
    $('<img class="gallery-photo additional-photo"></img>').addClass('photo-' + i)
                                                           .attr('src', 'resources/gallery-photo-' + i +  '.png')
                                                           .appendTo(galleryCarousel)
                                                           .hide();
}

$('.additional-photo').click(function() {
    $('.main-photo').attr("src", $(this).attr("src"));
    
    changeGalleryPhotoStyle(selectedPhotoNumber, false);
    for (var i = galleryCarousel_LeftBorder; i <= galleryCarousel_RightBorder; i++) {
        if ($('.additional-photo.photo-' + i).is($(this))) {
            selectedPhotoNumber = i;
            changeGalleryPhotoStyle(selectedPhotoNumber, true);
        }
    }
    setArrowButtonVisibility();
});

function changeGalleryMainPhoto(offset) {
    if (selectedPhotoNumber + offset < galleryCarousel_LeftBorder || selectedPhotoNumber + offset > galleryCarousel_RightBorder) {
        galleryCarousel.children().eq((selectedPhotoNumber - 1) - 3 * offset).hide();
        galleryCarousel.children().eq((selectedPhotoNumber - 1) + 1 * offset).show();
        galleryCarousel_LeftBorder += offset;
        galleryCarousel_RightBorder += offset;
    }
        
    changeGalleryPhotoStyle(selectedPhotoNumber, false);
    selectedPhotoNumber += offset;
    changeGalleryPhotoStyle(selectedPhotoNumber, true);
    $('.main-photo').attr("src", "resources/gallery-photo-" + selectedPhotoNumber + ".png");
    setArrowButtonVisibility();
}

function changeGalleryPhotoStyle(photoNumber, isSelected) {
    var currentPhoto = $('.additional-photo.photo-' + photoNumber);      
    currentPhoto.css('border',    isSelected ? '2px solid white' : 'none');
    currentPhoto.css('transform', isSelected ? 'scale(1.1)'      : 'none');
}

function setArrowButtonVisibility() {
    $('.gallery-arrow-left').css('visibility', selectedPhotoNumber === 1 ? 'hidden' : 'visible');
    $('.gallery-arrow-right').css('visibility', selectedPhotoNumber === galleryPhotosCount ? 'hidden' : 'visible');
}

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