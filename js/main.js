$(document).ready(function(){

	// IF ELEMENT EXIST (ThisPage - FAQ)
	if ( $(".faq_list") ) {

		$(".faq_list .item .ask").click(function(){
			$(".faq_list .item").removeClass("open");
			/*$(".faq_list .item .answer").each(function(){
				if ( $(this).css("display") == "block" ) {
					$(this).toggle("slow");
				}
			})*/


			$(this).parent().toggleClass("open");
			$(this).parent().find(".answer").toggle("slow");
		});
	}
});