"use strict";

let items = document.querySelectorAll(".items-list .item");

items.forEach(function (li) {
  li.addEventListener("click", function () {
    for (let sibling of this.parentNode.children) {
      console.log(this.parentNode);
      sibling.classList.remove("active");
    }
    document.getElementById(this.id).classList.toggle("active");
  });
});
