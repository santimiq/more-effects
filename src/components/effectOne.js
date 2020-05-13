import React, { useEffect, useState, useRef} from 'react'
import hoverEffect from 'hover-effect'
import one from "../images/img_one.jpg"
import two from "../images/img_two.jpg"

import effectOne from "./effectOne.css"



const One = () => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(".my-div"),
      intensity: 0.3,
      image1: one,
      image2: two,
      displacementImage:  two,
    })
  })


  return (
    <div>
      <div class="my-div"></div>
      <div class="hero-title">OFBEAT</div>
    </div>
  )
}

export default One
