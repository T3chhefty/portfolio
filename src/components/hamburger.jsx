import { useState } from "react";
// import MobileMenu from "./MobileMenu";
export default function HamburgerMenu() {
 
  const hamburger = {
    src1: "/ham-menu.png",
    src2: "/ham-menu-close.png",
    alt: "hambuger Menu",
    hide: "hide",
    show: "mobile-menu-container"
  };
 



// default link for the hamburger Image
const [hsrc, setHsrc] = useState(hamburger.src1);
const [style, setStyle] = useState(hamburger.hide);
  
  function handleClick() {
    
    if (hsrc == hamburger.src1) {
      setHsrc(hamburger.src2)
      setStyle(hamburger.show);
    
   } else {
      setHsrc(hamburger.src1)
      setStyle(hamburger.hide);
   }
    
  }

  return (
    <>
      <img className="hamburger-Menu" src={ hsrc } alt={ hamburger.alt } onClick={ handleClick } />
      
      <div className={style}>
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Lets's Talk</a>
        <a href="https://github.com/T3chhefty" target="_blank">Git Hub</a>
        <a href="">Download CV</a>
      </div>
    </>
  );
}
