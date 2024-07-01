import React, { useState, useEffect } from "react";
import { Layout } from "../conmponents";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  update,
} from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";
const FunctionComponent = () => {
  const database = getDatabase();
  const [color, setColor] = useState("blue");
  const [bgColor, setBgColor] = useState("green");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const updateBgColor = () => {
    setBgColor("blue");
  };

  useEffect(() => {
    // single data
    // const starCountRef = ref(database, "todos/" + "-O0idMKj5WQWMuYJYJza");
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log("data", data);
    // });

    const starCountRef = ref(database, "todos/");
    onValue(starCountRef, (snapshot) => {
      var newTodos = [];
      snapshot.forEach((todoValue) => {
        const data = todoValue.val();
        newTodos.push(data);
      });
      setTodos([...newTodos]);
      setLoading(false);
    });
  }, []);

  console.log("todos", todos);
  const addDataHandler = () => {
    // set(ref(database, "todos/"), {
    //   todo: todo,
    // });
    let newTodo = push(ref(database, "todos/"), {
      todo: todo,
    });
    update(ref(database, "todos/" + newTodo.key), {
      key: newTodo.key,
    });
    console.log(newTodo);
    setTodo("");
  };

  // edit
  const editHandler = (key) => {
    console.log("editHandler",key)
    update(ref(database, "todos/" + key), {
      todo: "Update",
    });
  };
  // delete
  const deleteHandler = () => {
    console.log("delete");
  };
  return (
    <Layout title="Contact">
      <h1 style={{ color: color, backgroundColor: bgColor }}>
        Function conmponent Page
      </h1>
      <input
        type="text"
        placeholder="Type ..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addDataHandler}>Add Data</button>
      <hr />
      <button onClick={() => setColor("red")}>Change Color</button>
      <button onClick={updateBgColor}>Bg Color Change</button>

      <br />
      <hr />
      {loading ? (
        <CircularProgress />
      ) : todos.length === 0 ? (
        <p>Data not found !</p>
      ) : (
        todos
          .map((val, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid red",
                  padding: "5px",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                <p>{val.todo}</p>
                <p>{val.key}</p>
                <button onClick={()=> editHandler(val.key)}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
              </div>
            );
          })
          .reverse()
      )}
    </Layout>
  );
};
export default FunctionComponent;
