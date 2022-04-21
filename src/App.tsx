import './App.css';
import Todo from "./hw2/Todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./lecture3/About";
import Main from "./lecture3/Main";
import React, {useState} from "react";
import UserProfile from "./hw3andLecture4/UserProfile";
import ListUsers from "./hw3andLecture4/ListUsers";
import ClassBasedCounter from "./hw1/ClassBasedCounter";
import NavBar from "./NavBar";
import {MyGlobalContext} from './hw3andLecture4/Context';
import LoginPage from "./hw4/LoginPage";
import Profile from "./hw4/Profile";
import UserList from "./hw4/UserList";
import {UserContext} from "./hw4/UserContext";

function App() {

    const [language, setLanguage] = useState<string>('en');
    const [dark, toggleDark] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(false);
    return (
        <>
            <UserContext.Provider value={{login, setLogin}}>
                <MyGlobalContext.Provider value={{language, setLanguage, dark, toggleDark}}>
                    <BrowserRouter>
                        <NavBar/>
                        <div className="App">
                            <Routes>
                                {/*homework4  */}
                                {login ?
                                    <><Route path={'/'} element={<UserList/>}/>
                                        <Route path='/user/:id' element={<Profile/>}/>

                                        <Route path={'/counter'} element={<ClassBasedCounter/>}/>
                                        <Route path={'/todo'} element={<Todo/>}/>
                                        <Route path={'/about'} element={<About/>}/> </>
                                    :
                                    <Route path={'/'} element={<LoginPage/>}/>
                                }

                            </Routes>
                        </div>
                    </BrowserRouter>
                </MyGlobalContext.Provider>
            </UserContext.Provider>
        </>

    );
}

export default App;
