import { useEffect } from "react";
import NewNotes from "../components/newNotes";
import styles from "~/styles/newNotes.css";
export default function Todo() {
  const getData = async () => {
    let response: any = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    let data = await response;
    console.log(data, "data pakxcekfj");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Notes</h1>
      <main>
        <NewNotes />
        <NewNotes />
        <NewNotes />
      </main>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
