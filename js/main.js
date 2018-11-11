var today = new Date();

// Add a given number of 0 at the left part of the number
function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}

// counter up to the current date
$(document).ready(function () {
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

// change the value of the day, every given time
setInterval(function () {

    today.setDate(today.getDate() + 1);

    var dd = pad_with_zeroes(today.getDate(), 2);
    var mm = pad_with_zeroes(today.getMonth() + 1, 2);
    var yyyy = today.getFullYear();

    $(".day").text(dd);
    $(".month").text(mm);
    $(".year").text(yyyy);
}, 900);