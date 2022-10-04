
import { useRouter } from "next/router";
import style from "./NavBarGlr.module.css";
export const NavBar = () => {
  const menuItems = [
    {
      text: "Inicio",
      href: "/",
    },
    {
      text: "Elecciones 2022",
      href: "/elecciones",
    },
    {
      text: "Encuestas",
      href: "/#",
    },
    {
      text: "Miembros De Mesa",
      href: "/#",
    },
  ];

  const activeNav = {
    color: "Black",
  };
  const { asPath } = useRouter();

  return (
    <>
        <ul className="nav justify-content-end">
        {menuItems.map(({ text, href }) => (
          <li
            style={asPath === href ? activeNav : null}
            className="navbar-brand"
            key={text}
          >
            <a className={style['item-nav']} href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
