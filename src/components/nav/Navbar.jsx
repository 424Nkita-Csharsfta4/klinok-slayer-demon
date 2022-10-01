import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/22.png";
import Menu from "./Menu";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../helpers/button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  // toggle menu state
  const handleMenu = () => setIsOpen((state) => !state);

  //close menu when hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <>
      <nav className={styled.nav}>
        <div className={styled.nav__logo}>
        
          <p>Kimitsu no yaba</p>
        </div>

        <RiMenuLine
          className={styled.nav__icon}
          size={35}
          color="var(--primary)"
          onClick={handleMenu}
        />

        <ul className={styled.nav__items}>
          <li>
            <Link smooth to="#home">
             Главное
            </Link>
          </li>

          <li>
            <Link smooth to="#about">
             Аниме
            </Link>
          </li>

       

          <li>
            <Link smooth to="#facilities">
             Описание
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Сезоны
            </Link>
          </li>
        </ul>

        <div className={styled.nav__button}>
          <Button link="#classes" className="secondary">
          Смотреть Аниме
          </Button>
        </div>
      </nav>

      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
