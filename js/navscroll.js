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

//https://docs.google.com/forms/d/e/1FAIpQLSdAMior_2KBXF_k8n8uPBmyf8YiVRjll6PZHXD7X91XUaNW6Q/viewform?embedded=true

var o1 = "https://docs.google.com/forms/d/e/1FAIpQLSdAMior_2KBXF_k8n8uPBmyf8YiVRjll6PZHXD7X91XUaNW6Q/viewform?embedded=true";
var o2 = "https://docs.google.com/forms/d/e/1FAIpQLSdAMior_2KBXF_k8n8uPBmyf8YiVRjll6PZHXD7X91XUaNW6Q/viewform?embedded=true";
console.log('o', o1==o2, o1, o2);