import React, { useEffect } from "react";
import { useShallow } from 'zustand/react/shallow';
import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/useToDoStore";

export const App: React.FC = () => {
  const { tasks, createTask, updateTask, removeTask } = useToDoStore(
    useShallow((s) => ({
      tasks: s.tasks,
      createTask: s.createTask,
      updateTask: s.updateTask,
      removeTask: s.removeTask,
    }))
  );

  useEffect(() => {
    if (tasks.length === 0) {
      createTask("test");
    }
  }, [tasks.length, createTask]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To-Do App</h1>
      <section className={styles.articleSection}>

      </section>
      <section className={styles.articleSection}>

      </section>
    </article>
  );
}
