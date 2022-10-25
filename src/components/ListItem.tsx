import { Trash, Check } from "phosphor-react";
import { useState } from "react";

import styles from "./ListItem.module.css";

interface ListItemProps {
  content: string;
  value: boolean;
  onDeleteTodo: (todoToDelete: any) => void;
  onChangeValue: (value: any) => void;
}

export function ListItem({
  content,
  value,
  onDeleteTodo,
  onChangeValue,
}: ListItemProps) {
  function handledeleteTodo() {
    onDeleteTodo(content);
  }

  function handleCheckValue() {
    onChangeValue(value);
  }

  return (
    <section className={styles.wrapper}>
      <div className={value ? styles.contentCheck : styles.content}>
        <button className={styles.check} onClick={handleCheckValue}>
          {value ? <Check size={11} weight="bold" /> : <></>}
        </button>
        <p>{content}</p>
      </div>
      <div className={styles.actions}>
        <Trash onClick={handledeleteTodo} size={14} />
      </div>
    </section>
  );
}
