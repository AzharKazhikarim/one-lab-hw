import { FC, useState } from "react";
import { TextField, Button, styled, Snackbar, Alert } from "@mui/material";

import Item from "./Item";
import { initialList } from "./initialList";

const Todo: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialList);
  const [isAlertOpened, setIsAlertOpened] = useState(false);

  //ADD TODOs
  const handleSubmit = () => {
    if (inputValue.length) {
      setTodos((todos) => [
        ...todos,
        {
          id: todos.length + 1,
          desc: inputValue,
          done: false,
        },
      ]);
    } else {
      setIsAlertOpened(true);
      setInterval(async () => setIsAlertOpened(false), 2000);
    }
    setInputValue("");
  };

  // SET DONE STATUS
  const handleStatus = (itemId: number) => {
    let updatedTodos = todos.map((item) => {
      if (item.id === itemId) {
        item.done = true;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  //DELETE ITEM FROM TODOs
  const handleDelete = (itemId: number) => {
    const newList = todos.filter((item) => item.id !== itemId);
    setTodos(newList);
  };

  return (
    <>
      <div className="item-wrapper">
        <Snackbar open={isAlertOpened}>
          <Alert
            severity="warning"
            sx={{ width: "250px", textAlign: "center" }}
          >
            Empty string!
          </Alert>
        </Snackbar>
        <div className="todos-container">
          <div className="todos-wrapper">
            {/* input for ADD and for FIND specific todos item*/}
            <TextField
              label="Write what you need to do"
              color="secondary"
              value={inputValue}
              focused
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ButtonStyled variant="contained" onClick={handleSubmit}>
              Add
            </ButtonStyled>
          </div>

          {todos
            .filter((todo) =>
              todo.desc
                .toLocaleLowerCase()
                .includes(inputValue.toLocaleLowerCase())
            )
            .map((todos) => (
              <Item
                key={todos.id}
                id={todos.id}
                desc={todos.desc}
                done={todos.done}
                handleStatus={handleStatus}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </>
  );
};

const ButtonStyled = styled(Button)`
  background: rgb(186, 141, 206);
  margin-top: 8px;
`;
export default Todo;

