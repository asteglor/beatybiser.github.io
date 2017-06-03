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
 	$('.pq-list>li').each(function(id, el){
 		if($(el).hasClass('active')){
 			$(el).removeClass('active');
 			$(el).find('div').hide("fast");
 		}
 	});
 	$(this).toggleClass("active");
 	if ($(".pq-list>li.active>div").is(":hidden")) {
        $(".pq-list>li.active>div").slideDown("slow");
      }
      else{
      	$(this).removeClass('active');
      	$('div', this).hide("fast");
      }
   });


$('.enjoy_btn').on('click', function(){
		$('.message_submit').text('Message is submit!')
})

