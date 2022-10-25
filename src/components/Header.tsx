import { Form } from "./Form";
import Logo from "../assets/logo-todo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={Logo} alt="Logotipo - Todo List" className={styles.logo} />
    </header>
  );
}
