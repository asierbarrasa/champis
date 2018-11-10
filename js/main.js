$(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    $(".day").text(dd);
    $(".month").text(mm);
    $(".year").text(yyyy);
    $(".blk").counterUp({
        delay: 10,
        time: 800
    });
});


var today = new Date();





setInterval(function() {

    today.setDate(today.getDate() + 1);

    var dd = pad_with_zeroes(today.getDate(),2);
    var mm = pad_with_zeroes(today.getMonth() + 1 ,2);
    var yyyy = today.getFullYear();

    $(".day").text(dd);
    $(".month").text(mm);
    $(".year").text(yyyy);

    
    }, 900); 