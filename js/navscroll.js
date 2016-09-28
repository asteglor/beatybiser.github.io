function scroll_nav(){
	return $(window).scrollTop()>500;
};
$(window).scroll(function() {
  $('nav').toggleClass("when_scroll", scroll_nav());
  $('whitediv').toggleClass("white_block", scroll_nav());
});
 $('nav').toggleClass("when_scroll", scroll_nav());
 $('whitediv').toggleClass("white_block", scroll_nav());

 $('.pq-list>li').click(function () {
 	$(this).toggleClass("active");
 	if ($(".pq-list>li.active>div").is(":hidden")) {
        $(".pq-list>li.active>div").slideDown("slow");
      }
      else{
      	$('div', this).hide("fast");
      }
   });


 