window.addEventListener('load', function () {
  gsap.registerPlugin(ScrollToPlugin);

  setTimeout(function () {
    gsap.to(
      window,
      {
        duration: 1,
        scrollTo: { y: "#js-totop", offsetY: 50 }
      }
    );
  }, 1000)

  document.getElementById('js-totop').addEventListener('click', function() {
    gsap.to(
      window,
      {
        duration: 2,
        scrollTo: { y: 0, x: 0 },
        ease: "power2"
      }
    );
  })
});
