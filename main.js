$( document ).ready(function() {
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

$(".day").text(dd);
$(".month").text(mm);
$(".year").text(yyyy);
    $(".blk").counterUp({delay:10,time:800});
});

