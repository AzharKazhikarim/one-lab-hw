import {FC, useState} from "react";
import {
    TextField,
    Button,
    styled
} from "@mui/material";
import Item from "./Item";

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

    //ADD TODO
    const handleSubmit = () => {
        setTodos((todo) => [
            ...todo,
            {id: +Math.floor(Math.random() * 10000), desc: inputValue, done: false},
        ]);
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

                {todo
                    .filter((td) => {
                        if (
                            td.desc
                                .toLocaleLowerCase()
                                .includes(inputValue.toLocaleLowerCase())
                        ) {
                            return td;
                        }
                    })
                    .map((todo) => (
                        <Item id={todo.id} desc={todo.desc} done={todo.done} handleStatus={handleStatus}
                              handleDelete={handleDelete}/>
                    ))}

            </div>
        </>
    );
};

const ButtonStyled = styled(Button)`
  background: rgb(186, 141, 206);
  margin-top: 8px;
`;

export default Todo;
