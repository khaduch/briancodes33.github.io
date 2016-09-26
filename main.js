var count = 1;
disp();
function disp() {
  if (count === 1) $(".skill-slider").hide();
  $('.sk' + count)
    .fadeIn(2000, disp).appendTo('.skills-content');
  count = (count % 4) + 1;
}
