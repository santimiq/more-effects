import React from "react"
import effectOne from "./effectTwo.css"

const Two = () => {
  return (
    <main>
      <div class="frame">
        <div class="frame__title-wrap">
          <h1 class="frame__title">CSS-only Marquee Menu Effect</h1>
        </div>
      </div>
      <nav class="menu">
        <div class="menu__item">
          <a class="menu__item-link">Showreel</a>
          <img class="menu__item-img" src={require("../images/two/1.jpg")} alt="Some image" />
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Showreel</span>
              <span>Showreel</span>
              <span>Showreel</span>
              <span>Showreel</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Case Studies</a>
          <img class="menu__item-img" src={require("../images/two/2.jpg")} alt="Some image" />
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Case Studies</span>
              <span>Case Studies</span>
              <span>Case Studies</span>
              <span>Case Studies</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Experiments</a>
          <img class="menu__item-img" src={require("../images/two/3.jpg")} alt="Some image" />
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Experiments</span>
              <span>Experiments</span>
              <span>Experiments</span>
              <span>Experiments</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Our Crew</a>
          <img class="menu__item-img" src={require("../images/two/4.jpg")} alt="Some image" />
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>The Crew</span>
              <span>The Crew</span>
              <span>The Crew</span>
              <span>The Crew</span>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <a class="menu__item-link">Contact</a>
          <img class="menu__item-img" src={require("../images/two/5.jpg")} alt="Some image" />
          <div class="marquee">
            <div class="marquee__inner" aria-hidden="true">
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </nav>
    </main>
  )
}

export default Two
