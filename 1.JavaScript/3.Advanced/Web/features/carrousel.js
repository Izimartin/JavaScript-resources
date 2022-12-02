var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4500); // Change image every 4 seconds
}
$('#hero-container').on('slide.bs.carousel', function (e) {
  $('.mySlides').hide();
}).on('slid.bs.carousel', function (e) {
  $('.active .mySlides').slideToggle('slow');
});
