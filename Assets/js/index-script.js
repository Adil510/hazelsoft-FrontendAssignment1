$(document).ready(function () {
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // On mobile, handle dropend clicks manually since Bootstrap
  // applies inline style="display:none" that CSS !important can't override
  document
    .querySelectorAll('.navbar-nav .dropend > [data-bs-toggle="dropdown"]')
    .forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();

          const menu = this.nextElementSibling;
          const parentLi = this.closest(".dropend");
          const isOpen = menu.style.display === "block";

          // Close all other open dropends at this level
          const siblings = parentLi.parentElement.querySelectorAll(
            ".dropend > .dropdown-menu",
          );
          siblings.forEach(function (m) {
            m.style.display = "none";
            m.closest(".dropend").classList.remove("show");
          });

          // Toggle this one
          if (!isOpen) {
            menu.style.display = "block";
            parentLi.classList.add("show");
          }
        }
      });
    });
});
