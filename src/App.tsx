import { Header } from "./components/Header";
import { ListContainer } from "./components/ListContainer";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <ListContainer />
    </section>
  );
}

export default App;
