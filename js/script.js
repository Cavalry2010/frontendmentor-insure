"use strict";

class Insure {
  mobileNavBtn = document.querySelector(".mobile-nav-btn");
  navElement = document.querySelector(".nav");

  constructor() {
    this.mobileNavBtn.addEventListener(
      "click",
      this.toggleMobileNav.bind(this)
    );
  }

  toggleMobileNav() {
    this.navElement.classList.toggle("open-nav");
    document.documentElement.classList.toggle("scroll-lock");
  }
}

const app = new Insure();
