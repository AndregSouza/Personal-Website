var lastPosition = -10;

$(document).ready(function() {
    $('.wrapper').height($('.smooth').height());

    $(window).resize(function() {
        $('.wrapper').height($('.smooth').height());
    });
});

var scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

function loop() {
    // Avoid calculations if not needed
    if (lastPosition == window.pageYOffset) {
        scroll(loop);
        return false;
    } else lastPosition = window.pageYOffset;

    var transform = 'translate3d(0px, -' + lastPosition/12 + 'px, 0px)';
    var smoothScoll = $(".smooth")[0];

    smoothScoll.style.webkitTransform = transform;
    smoothScoll.style.mozTransform = transform;
    smoothScoll.style.transform = transform;

    scroll(loop)
}

// Call the loop for the first time
loop();
