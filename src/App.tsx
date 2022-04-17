import './App.css';
import Todo from "./hw2/Todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./lecture3/About";
import Main from "./lecture3/Main";
import React from "react";

const user = {
    name:'Azhar'
};

export const ThemeContext = React.createContext(user);

function App() {

    return (
        <div className="App">

            <ThemeContext.Provider value={user}>
                <BrowserRouter>
                    <Routes>

                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/todo'} element={<Todo/>}/>
                        <Route path={'/about'} element={<About/>}/>

                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
