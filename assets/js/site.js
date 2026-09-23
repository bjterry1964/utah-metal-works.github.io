(function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var tabs = document.querySelectorAll(".tablist button");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (other) {
        var selected = other === tab;
        other.setAttribute("aria-selected", selected ? "true" : "false");
        var panel = document.getElementById(other.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
    });
  });

  var dialog = document.querySelector("dialog.lightbox");
  if (!dialog) return;
  var picture = dialog.querySelector("img");
  document.querySelectorAll(".shot").forEach(function (shot) {
    shot.addEventListener("click", function () {
      var img = shot.querySelector("img");
      picture.src = img.src;
      picture.alt = img.alt;
      if (typeof dialog.showModal === "function") dialog.showModal();
    });
  });
})();
