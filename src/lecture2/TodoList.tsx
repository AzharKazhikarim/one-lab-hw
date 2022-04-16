import {FC, useState} from "react";
import {Button, TextField} from "@mui/material";

const TodoList: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodos] = useState([{
        id: 1,
        desc: "Todo 1",
        done: true,
    }]);

    const handleSubmit = () => {
        setTodos((todo) => [...todo, {id: 2, desc: inputValue, done: false}]);
        setInputValue("");
    };

    return (
        <>
            <div className="container">
                <TextField
                    label="Write task"
                    variant="standard"
                    color="info"
                    focused
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="contained" onClick={handleSubmit}>Add Task</Button>

                {
                    todo.map(e => (
                        <h4 style={{color: "white"}}>* {e.desc}</h4>
                    ))
                }
            </div>
        </>
    )
}
export default TodoList;