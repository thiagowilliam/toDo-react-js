import { EmptyList } from "./EmptyList";
import { ListItem } from "./ListItem";
import { v4 as uuidv4 } from "uuid";

import styles from "./ListContainer.module.css";
import { useState } from "react";

import { PlusCircle } from "phosphor-react";

const listContent = [
  {
    content: "Fazer café",
    value: false,
  },

  {
    content: "Fazer café 123",
    value: false,
  },
];

export function ListContainer() {
  const [toDos, setToDos] = useState(listContent);
  const [countDone, setCountDone] = useState(0);

  function handleCreateNewToDo(e: any) {
    e.preventDefault();
    const newToDo = {
      content: e.target[0].value,
      value: false,
    };
    setToDos([...toDos, newToDo]);
  }

  function deleteTodo(todoToDelete: any) {
    const todosWithoutDeleteOne = toDos.filter((todo) => {
      return todo !== todoToDelete;
    });

    setToDos(todosWithoutDeleteOne);
  }

  function changeValue(value: any) {
    const newToDos = toDos.map((todo) => {
      if (todo.content === value.content) {
        todo.value = !value.value;

        if (todo.value === true) {
          setCountDone(countDone + 1);
        }
        if (todo.value === false) {
          setCountDone(countDone - 1);
        }
      }

      return todo;
    });

    setToDos(newToDos);
  }

  return (
    <main>
      <form className={styles.formWrapper} onSubmit={handleCreateNewToDo}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
        />
        <button className={styles.button}>
          Criar <PlusCircle size={17} weight="bold" />
        </button>
      </form>
      <header className={styles.header}>
        <p className={styles.countTaskCreated}>
          Tarefas criadas <span>{toDos.length}</span>
        </p>
        <p className={styles.countTaskConcluded}>
          Concluidas <span>{countDone}</span>
        </p>
      </header>
      <section>
        {toDos.length > 0 ? (
          <>
            {toDos.map((item) => {
              return (
                <ListItem
                  key={uuidv4()}
                  content={item.content}
                  onDeleteTodo={() => deleteTodo(item)}
                  onChangeValue={() => changeValue(item)}
                  value={item.value}
                />
              );
            })}
          </>
        ) : (
          <EmptyList />
        )}
      </section>
    </main>
  );
}
