$(function() {
  $('#lumini').hover(function() {
    $('#image-work').css('background-image', 'url(./images/lumini.jpg)');
    $('#lumini').css('opacity', '1');
    $('#entrelinhas').css('opacity', '0.3');
    $('#google').css('opacity', '0.3');
    $('#uber').css('opacity', '0.3');
    $('#paypal').css('opacity', '0.3');
    $('#livelo').css('opacity', '0.3');
  });
});

$(function() {
  $('#entrelinhas').hover(function() {
    $('#image-work').css('background-image', 'url(./images/entrelinhas.jpg)');
    $('#lumini').css('opacity', '0.3');
    $('#entrelinhas').css('opacity', '1');
    $('#google').css('opacity', '0.3');
    $('#uber').css('opacity', '0.3');
    $('#paypal').css('opacity', '0.3');
    $('#livelo').css('opacity', '0.3');
  });
});

$(function() {
  $('#google').hover(function() {
    $('#image-work').css('background-image', 'url(./images/google-play.jpg)');
    $('#lumini').css('opacity', '0.3');
    $('#entrelinhas').css('opacity', '0.3');
    $('#google').css('opacity', '1');
    $('#uber').css('opacity', '0.3');
    $('#paypal').css('opacity', '0.3');
    $('#livelo').css('opacity', '0.3');
  });
});

$(function() {
  $('#uber').hover(function() {
    $('#image-work').css('background-image', 'url(./images/uber.jpg)');
    $('#lumini').css('opacity', '0.3');
    $('#entrelinhas').css('opacity', '0.3');
    $('#google').css('opacity', '0.3');
    $('#uber').css('opacity', '1');
    $('#paypal').css('opacity', '0.3');
    $('#livelo').css('opacity', '0.3');
  });
});

$(function() {
  $('#paypal').hover(function() {
    $('#image-work').css('background-image', 'url(./images/entrelinhas2.jpg)');
    $('#lumini').css('opacity', '0.3');
    $('#entrelinhas').css('opacity', '0.3');
    $('#google').css('opacity', '0.3');
    $('#uber').css('opacity', '0.3');
    $('#livelo').css('opacity', '0.3');
  });
});

$(function() {
  $('#livelo').hover(function() {
    $('#image-work').css('background-image', 'url(./images/livelo.jpg)');
    $('#lumini').css('opacity', '0.3');
    $('#entrelinhas').css('opacity', '0.3');
    $('#google').css('opacity', '0.3');
    $('#uber').css('opacity', '0.3');
    $('#paypal').css('opacity', '0.3');
    $('#livelo').css('opacity', '1');
  });
});
