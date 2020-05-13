import React from 'react'
import hoverEffect from 'hover-effect'

var myAnimation = new hoverEffect({
  parent: document.querySelector(".my-div"),
  intensity: 0.3,
  image1: "images/myImage1.jpg",
  image2: "images/myImage2.jpg",
  displacementImage: "images/myDistorsionImage.png",
})

const One = () => {
  <div>
    <div class="my-div"></div>
  </div>
}

export default One
