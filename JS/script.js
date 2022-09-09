$(".sl").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear",
});

document.getElementById("btn").addEventListener("click", function () {
  alert("Thanks for filling out our form! Feedback Sent Successfully");
});
