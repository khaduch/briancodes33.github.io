var count = 1;
var loopCount = 0;
var elementCount = 4;
disp();
function disp() {
	if (loopCount++ > 2005 * elementCount ) {
        $(".skill-slider").fadeIn(2000);
        return;
  }
  $(".skill-slider").hide();
  $('.sk' + count)
    .fadeIn(2000, disp).appendTo('.skills-content');
  count = (count % elementCount) + 1;
  console.log(count);
}
