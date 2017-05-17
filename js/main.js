//*************SLIDER/CAROUSEL********************************//
$(document).ready(function() {
    $(".slider").slick({ //used slick to create carousel - used lazy slider.  gave each img id name data-lazy and deleted src per instructions//
        dots: true
    });

    //Click on Navigation Bar Links to a certain section. Create click function on nav tag//
    $("nav a").click(function(e) {
        var btnId = "section" + this.id; //create a button variable to call the section.  give each section an id name to call it//

        $('html, body').animate({ //add a animate timer to scroll up to the top.
            scrollTop: $("#" + btnId).offset().top //added div #top to body so that section will float to the top.
        }, 1000);
    });


    $(".img1").click(function() {
        $src = $(this).attr("src"); //call the attribute//
        if (!$("#light-box").length > 0) { //if there is no lightbox- then create an attribute lightbox//
            $("body").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");
            $("#light-box").show(); //make element visible by adding show effect//
            $("#light-box img").attr("src", $src);
        } else { //else if the attribute does exist, then show//
            $("#light-box").show();
            $("#light-box img").attr("src", $src);
        }
    });

    $("body").on("click", "#light-box span", function() {
        $("#light-box").hide();
    });

    setTimeout(function() {
        $('.floating-letters-text').removeClass('hidden');
    }, 500);

});
