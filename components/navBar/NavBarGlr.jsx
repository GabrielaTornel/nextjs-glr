import Image from "next/image";
import { NavBar } from "./NavBar";
import styles from './NavbarGlr.module.css'

export const NavBarGlr = () => {
  return (
    <div className={styles['nav-bar-glr']}>
      <Image
        className={styles['img-nav']}
        src="/img/post1.png"
        width={200}
        height={100}
        alt="54854"
      />
      <NavBar />
      <hr />
    </div>
  );
};
