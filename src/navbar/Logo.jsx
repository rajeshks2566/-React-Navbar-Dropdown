import React, { useRef, useState } from "react";

const Logo = () => {
  let dropdownRef = useRef();
  let[dropState, setDropstate]=useState(true);

  let drop = e => {
    setDropstate(!dropState);
    console.log(dropState);

    if (dropState === false) {
        dropdownRef.current.classList.add("open");
        
    } else {
      dropdownRef.current.classList.remove("open");
    }
  };
  return (
    <section id="logoSec">
      <article id="logoArt">
        <ul>
          <li>
            <a href="">Trainers</a>
          </li>
          <li>
            <a href="#" onMouseEnter={drop} onMouseLeave={drop}>
              Courses
            </a>
            <ul id="courses" ref={dropdownRef}>
              <li>MERN Stack</li>
              <li>MEAN Stack</li>
              <li>Python Full Stack</li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Logo;
