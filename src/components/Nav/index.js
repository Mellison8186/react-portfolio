import React from "react";
import pdf from '../../assets/resume-doc/resume.pdf';

function Nav({setPage}) {
  function handleClick(event) {
    setPage(event.target.textContent)
  }
  return (
    <header className="flex-row space-between px-1">
      <h2 className="my-2">
        <a href="/">
          <span role="img" aria-label="me"></span> Maribel Ellison
        </a>
      </h2>
        <ul className="flex-row my-3 justify-content-end">
          <li className="mx-2" onClick={(event) => handleClick(event)}>
            <a href="#about">
              About me
            </a>
          </li>
          <li className={`mx-2`} onClick={(event) => handleClick(event)}>
              Portfolio
          </li>
          <li className={`mx-2`} onClick={(event) => handleClick(event)}><a href={pdf} target="blank">
              Resumé</a>
          </li>
          <li className={`mx-2`} onClick={(event) => handleClick(event)}>
              Contact
          </li>
        </ul>
    </header>
  );
}

export default Nav;