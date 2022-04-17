import {FC, useState} from "react";
import {
    TextField,
    Button,
    styled, Snackbar, Alert,
} from "@mui/material";

import Item from "./Item";
import * as React from "react";

const initialList = [
    {
        id: 1,
        desc: "Todo 1",
        done: false,
    },
    {
        id: 2,
        desc: "Todo 2",
        done: false,
    },
];

const Todo: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodos] = useState(initialList);
    const [openAlert, setOpenAlert] = useState(false);

    //ADD TODO
    const handleSubmit = () => {
        if (inputValue.length !== 0) {
            setTodos((todo) => [
                ...todo,
                {id: +Math.floor(Math.random() * 10000), desc: inputValue, done: false},
            ]);
        } else {
            setOpenAlert(true);
            setInterval((async () => setOpenAlert(false)), 2000);
        }
        setInputValue("");
    };

    // SET DONE STATUS
    const handleStatus = (itemId: number) => {
        let updatedTodos = todo.map((item) => {
            if (item.id === itemId) {
                item.done = true;
            }
            return item;
        });
        setTodos(updatedTodos);
    };

    //DELETE ITEM FROM TODO
    const handleDelete = (itemId: number) => {
        const newList = todo.filter((item) => item.id !== itemId);
        setTodos(newList);
    };

    return (
        <>
            <div className="item-wrapper">
                <Snackbar open={openAlert}>
                    <Alert severity="warning" sx={{width: '250px', textAlign: 'center'}}>
                        Empty string!
                    </Alert>
                </Snackbar>
                <div className="todo-container">
                    <div className="todo-wrapper">
                        {/* input for ADD and for FIND specific todo item*/}
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

                    {todo.filter((td) => {
                        if (td.desc.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
                            return td;
                        }
                    })
                        .map((todo) => (
                            <Item key={todo.id} id={todo.id} desc={todo.desc} done={todo.done} handleStatus={handleStatus}
                                  handleDelete={handleDelete}/>
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
