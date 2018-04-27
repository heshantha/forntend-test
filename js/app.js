$(document).ready(function(){
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 20
});
$(".favorite-btn").click(function(){
    $(this).toggleClass("favorite");
	 $(this).siblings().css( "display", "block" );
});
//dymaically add ID
$.each($('.grid-item '), function(ind) {
   $(this).attr('id', 'img-block-' + parseInt(ind + 1));
});


//add value for div
$('#textarea_value').click(function() {
var textarea_value = $("#textarea").val();
if(textarea_value=='') {
alert("Enter Some Text In Textarea");
}else{
 $('#descrption_block').append($('#textarea').val());
 	 $(".descrption-conatiner,.trash-icon-block").css( "display", "block" );
	 
}
});
// delete add value
$('.descrption-conatiner').on('click','#trash_icon_block',function() {
   $(this).parent().remove();
});
});



