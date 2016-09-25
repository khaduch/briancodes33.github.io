console.log('working');

$(document).ready(function() {
  $('.skill-slider').hide();
  setInterval(function(){
    $('.skill-slider')
    .fadeOut(500).fadeIn(2000).appendTo('.skills-content');
  },3000)
})
