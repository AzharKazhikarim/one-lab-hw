import "./App.css";
import Todo from "./hw2/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./lecture3/About";
import { useState } from "react";
import ClassBasedCounter from "./hw1/ClassBasedCounter";
import NavBar from "./NavBar";
import { MyGlobalContext } from "./hw3andLecture4/Context";
import LoginPage from "./hw4/LoginPage";
import Profile from "./hw4/Profile";
import UserList from "./hw4/UserList";
import { UserContext } from "./hw4/UserContext";
import { rawTranslations } from "./hw4/rawTranslations";
import { Language, LanguageContext } from "./hw4/LanguageContext";

function App() {
  const [language, setLanguage] = useState<Language>("ru");
  const [login, setLogin] = useState<boolean>(true);
  const translations = rawTranslations[language];

  return (
    <>
      <UserContext.Provider value={{ login, setLogin }}>
        <LanguageContext.Provider
          value={{ language, setLanguage, translations }}
        >
          <BrowserRouter>
            <NavBar />
            <div className="App">
              <Routes>
                {/*homework4  */}
                {login ? (
                  <>
                    <Route path={"/"} element={<UserList />} />
                    <Route path="/user/:id" element={<Profile />} />
                    <Route path={"/counter"} element={<ClassBasedCounter />} />
                    <Route path={"/todo"} element={<Todo />} />
                    <Route path={"/about"} element={<About />} />{" "}
                  </>
                ) : (
                  <Route path={"/"} element={<LoginPage />} />
                )}
              </Routes>
            </div>
          </BrowserRouter>
        </LanguageContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
