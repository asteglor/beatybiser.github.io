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
var actionURL = "https://docs.google.com/forms/d/e/1FAIpQLSdAMior_2KBXF_k8n8uPBmyf8YiVRjll6PZHXD7X91XUaNW6Q/formResponse?";
var data = {
	"entry.1210792036":'Vlad'
};
/*$('.enjoy_btn').on('click', function(){
		$('#google_form').find('.form-control').each(function(id, obj){
			data[obj.name] = $(obj).val()
		});
		data['submit'] = 'Submit';
		console.log('data', data);
	$.post(actionURL,data,function(){
		console.log('message compleate')
	});


});
*/
$('.enjoy_btn').on('click', function(){
		$('.message_submit').text('Message is submit!')
})

