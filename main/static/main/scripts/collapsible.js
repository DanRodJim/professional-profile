document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");

  coll.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // sumar padding superior e inferior al scrollHeight
        const style = window.getComputedStyle(content);
        const paddingTop = parseFloat(style.paddingTop);
        const paddingBottom = parseFloat(style.paddingBottom);
        content.style.maxHeight = (content.scrollHeight + paddingTop + paddingBottom) + "px";
      }
    });
  });
});
