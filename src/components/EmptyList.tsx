import styles from "./EmptyList.module.css";

import clipboard from "../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.wrapper}>
      <img src={clipboard} alt="clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
