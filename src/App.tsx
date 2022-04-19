import './App.css';
import Todo from "./hw2/Todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./lecture3/About";
import Main from "./lecture3/Main";
import React, {useState} from "react";
import UserProfile from "./hw3/UserProfile";
import ListUsers from "./hw3/ListUsers";
import ClassBasedCounter from "./hw1/ClassBasedCounter";
import NavBar from "./NavBar";
import {MyGlobalContext} from './hw3/Context';

function App() {

    const [language, setLanguage] = useState<string>('en');

    return (
        <>
            <MyGlobalContext.Provider value={{language, setLanguage}}>
                <BrowserRouter>
                    <NavBar/>
                    <div className="App">

                        <Routes>
                            <Route path={'/'} element={<Main/>}/>
                            <Route path={'/counter'} element={<ClassBasedCounter/>}/>
                            <Route path={'/todo'} element={<Todo/>}/>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/users'} element={<ListUsers/>}/>
                            <Route path='/users/user/:id' element={<UserProfile/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </MyGlobalContext.Provider>
        </>

    );
}

export default App;
