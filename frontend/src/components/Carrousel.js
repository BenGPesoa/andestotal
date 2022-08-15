import React from "react"
import { ImageSlider } from "react-simple-gallery"
import "react-simple-gallery/dist/index.css"
 
const Carrousel = (props) => {
  const data =[
    { title: "Image 1", src:"img/galeria/img1.jpg" },
    { title: "Image 2", src:"img/galeria/img2.jpg" },
    { title: "Image 3", src:"img/galeria/img3.jpg" },
    { title: "Image 4", src:"img/galeria/img4.jpg" },
    { title: "Image 5", src:"img/galeria/img5.jpg" },
    { title: "Image 6", src:"img/galeria/img6.jpg" },
    { title: "Image 7", src:"img/galeria/img7.jpg" },
    { title: "Image 8", src:"img/galeria/img8.jpg" },
    { title: "Image 9", src:"img/galeria/img9.jpg" }
  ]
  return (
    <div className="Carrousel">
      <ImageSlider data={data} />
    </div>
  )
}

export default Carrousel;
 