import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export function Form() {
  function handleCreateNewToDo(e: any) {
    e.preventDefault();
    console.log("oi");
  }

  return (
    <form className={styles.wrapper} onSubmit={handleCreateNewToDo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
      />
      <button className={styles.button}>
        Criar <PlusCircle size={17} weight="bold" />
      </button>
    </form>
  );
}
