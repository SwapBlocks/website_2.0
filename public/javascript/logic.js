
// ========= NAV BAR SCROLL TO =========

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top
    }, 1400);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    }, 1400);
});

$("#distribution").click(function() {
    $('html, body').animate({
        scrollTop: $("#coin-dis").offset().top
    }, 1400);
});

$("#roadmap").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-4").offset().top
    }, 1400);
});

$("#team").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-5").offset().top
    }, 1400);
});

$("#faqq").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-6").offset().top
    }, 1400);
});

// MOBILE NAV
$(document).ready(function () {
    $("#mobile-nav").hide();
    $("#mobile-menu-button-2").hide();
    
    var openMobile = function() {
        $("#mobile-menu-button").hide();
        $("#mobile-menu-button-2").show();
        $("#mobile-nav").slideDown();
    }
    $("#mobile-menu-button").click(function() {
        openMobile();  
    });
    var closeMobile = function() {
        $("#mobile-menu-button-2").hide();
        $("#mobile-menu-button").show();
        $("#mobile-nav").slideUp();
        
    }
    $("#mobile-menu-button-2").click(function() {
        closeMobile();
    });
});


$("#home-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top
    }, 1400);
});

$("#about-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    }, 1400);
});

$("#distribution-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#coin-dis").offset().top
    }, 1400);
});

$("#roadmap-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#section-55").offset().top
    }, 1400);
});

$("#team-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#section-5").offset().top
    }, 1400);
});

$("#faqq-2").click(function() {
    $("#mobile-nav").slideUp();
    $("#mobile-menu-button-2").hide();
    $("#mobile-menu-button").show();
    $('html, body').animate({
        scrollTop: $("#section-6").offset().top
    }, 1400);
});



// FAQ

$('.faq_question').click(function() {
    
    if ($(this).parent().is('.open')) {
        $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': '0' }, 500);
        $(this).closest('.faq').removeClass('open');

    } else {
        var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
        $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': newHeight }, 500);
        $(this).closest('.faq').addClass('open');
    }

});


//chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Pubic Sale', 60],
    ['Devolpment Fund', 20],
    ['Bounties', 7],
		['Management', 8],
		['Advisors', 2],
    ['Airdrop', 3]
  ]);

  var options = {
    backgroundColor: { fill:'transparent' },
    legend: {position: 'none'},
    height: 'auto',
    width: 'auto',
    pieHole: 0.4,
    colors: ['#8da4be']
  };

  //var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  //chart.draw(data, options);
}


//Particles

$(document).ready(function() {
    Particles.init({
        selector: '.particles',
        sizeVariations: 4,
        speed: .4,
        maxParticles: 40,
        color: ['#222e40', '#8da4be'],
        connectParticles: true,
        minDistance: 100,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 40,
                    connectParticles: false
                }
						}
				]
    });
});





// Scroll Animations
// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter-value').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text() 
//       }).animate({
//           countNum: countTo
//         },

//         {

//           duration: 1500,
//           easing: 'swing',
//           step: function() {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             $this.text(this.countNum);
//             //alert('finished');
//           }

//         });
//     });
//     a = 1;
//   }

// });



$(document).ready( function() {
    // $('.percents').hide();
})

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 10) {
        $('#nav').addClass("shadow");
    }else {
        $('#nav').removeClass("shadow");
    }
    if (y > 10) {
        $('#mobile-nav-section').addClass("shadow");
    }else {
        $('#mobile-nav-section').removeClass("shadow");
    }
    if (y > 2200) {
        $('.percents').slideDown().fadeIn();
    }
})





