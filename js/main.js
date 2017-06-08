
$(document).ready(function() {

    $(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#nav1').addClass('shrink');
    }
    else {
    $('#nav1').removeClass('shrink');

    }
  });

$(function(){
        $("#typing_text").typed({
            strings: ["Hello World,", "this is amazing."],
            typeSpeed: 0
        });
    });

//function for Navbar animation //

  //   $(window).scroll(function() {
  //   if($(document).scrollTop() > 10) {
  //       $('nav').fadeIn(10);
  //   }
  //   else {
  //   $('nav').fadeOut(10);

  //   }
  // });


//function for scrolltop-click to sections//
    $("nav a").click(function(e) {
        var btnId = "section" + this.id; //create a button variable to call the section.  give each section an id name to call it//

        $('html, body').animate({ //add a animate timer to scroll up to the top.
            scrollTop: $("#" + btnId).offset().top //added div #top to body so that section will float to the top.
        }, 1000);
    });


//Function for floating letters//
    setTimeout(function() {
        $('.floating-letters-text').removeClass('hidden');
    }, 500);

});



//*************SLIDER/CAROUSEL********************************//
    // $(".slider").slick({ //used slick to create carousel - used lazy slider.  gave each img id name data-lazy and deleted src per instructions//
    //     dots: true
    // });


    //Click on Navigation Bar Links to a certain section. Create click function on nav tag//



    // $(".img1").click(function() {
    //     $src = $(this).attr("src"); //call the attribute//
    //     if (!$("#light-box").length > 0) { //if there is no lightbox- then create an attribute lightbox//
    //         $("body").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");
    //         $("#light-box").show(); //make element visible by adding show effect//
    //         $("#light-box img").attr("src", $src);
    //     } else { //else if the attribute does exist, then show//
    //         $("#light-box").show();
    //         $("#light-box img").attr("src", $src);
    //     }
    // });

    // $("body").on("click", "#light-box span", function() {
    //     $("#light-box").hide();
    // });

