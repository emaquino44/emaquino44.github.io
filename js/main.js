$(document).ready(function() {

//Function for floating letters//
    setTimeout(function() {
        $('.floating-letters-text').removeClass('hidden');
    }, 100);

//Function for Typed letters//
    $(".type").typed({
        strings: ["^3000 Hello World!", "I am a Full Stack Web Developer", 'Lets Innovate...', 'Lets Inspire...', '..Lets Change the World!', '...Shall we?'],
        startDelay: 500,
        typeSpeed: 100,
        loop: true
    });


    $("nav a").click(function(e) {
        var btnId = "section" + this.id; //create a button variable to call the section.  give each section an id name to call it//
        $('html, body').animate({ //add a animate timer to scroll up to the top.
            scrollTop: $("#" + btnId).offset().top //added div #top to body so that section will float to the top.
        }, 100);
    });


});

