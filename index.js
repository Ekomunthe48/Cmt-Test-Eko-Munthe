var jq = document.createElement("script");

jq.addEventListener("load", proceed); // pass my hoisted function
jq.src = "//code.jquery.com/jquery-3.5.1.js";
document.querySelector("head").appendChild(jq);

function proceed() {
    var previousScroll = 0;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
            if (previousScroll > 50) {
                $('#newsletter').slideDown().css('display', 'grid');
            }
        } else {
                $('#newsletter')
        }
        previousScroll = currentScroll
    })
    $('.btn').click(() => {
        $('#newsletter').slideUp()
    })
    $('.notif-btn').click(() => {
        $('#notif').slideUp()
    })
    setInterval(() => {
        $('#newsletter').slideDown().css('display', 'grid');
    }, 600000)
}



