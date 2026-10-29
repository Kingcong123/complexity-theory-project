(function () {
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");
  var main = document.querySelector(".main");

  if (!toggle || !sidebar || !main) return;

  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    main.classList.toggle("sidebar-collapsed");
  });
})();
