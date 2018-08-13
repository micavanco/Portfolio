$(function () {
   var $header = $('.header');

   var prev = 100;
   var $el = $('#content');

   $(document).on('scroll', function () {
       if($(this).scrollTop() > prev && $(this).scrollTop() > 60)
       {
           $header.fadeOut('slow');
       }
       else if($(this).scrollTop() < prev)
       {
           $header.animate({
               opacity: '1.0',
               width: '395',
           }, 20, function () {
               $header.show();
           })
       }
       if($(this).scrollTop() === 0)
       {
           $header.animate({
               minWidth: '+=700',
               height: '+=10',
               fontSize: '+=2'
           }, 100, function () {
               $header.animate({
                   minWidth: '-=700',
                   height: '-=10',
                   fontSize: '-=2'
               }, 500)
           })
       }

       prev = $(this).scrollTop();
   });
});