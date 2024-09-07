// disappearing banner
function banruBannerDelete() {
    var x = document.getElementById("banruBanner");
    var button = document.getElementById("banruBannerButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    button.style.display = "none";
  }


  // for testimonial image shuffle 
  $(document).ready(function () {

    $('.client-single').on('click', function (event) {
       event.preventDefault();

       var active = $(this).hasClass('active');

       var parent = $(this).parents('.testi-wrap');

       if (!active) {
           var activeBlock = parent.find('.client-single.active');

           var currentPos = $(this).attr('data-position');

           var newPos = activeBlock.attr('data-position');

           activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
           activeBlock.attr('data-position', currentPos);

           $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
           $(this).attr('data-position', newPos);

       }
   });

}(jQuery));