import { FC } from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserContext } from "./hw4/UserContext";
import { useLanguageContext } from "./hw4/LanguageContext";

const NavBar: FC = () => {
  const { setLanguage, translations } = useLanguageContext();
  const { login, setLogin } = useUserContext();
  const text = translations.navbar;
  return (
    <>
      {login ? (
        <ul className={"navbar-ul"}>
          <li className={"navbar-li"}>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li className={"navbar-li"}>
            <Link to={"/todo"}>Todo</Link>
          </li>
          <li className={"navbar-li"}>
            <Link to={"/"}>Users</Link>
          </li>
          <Button
            sx={{ float: "right", margin: 1 }}
            variant="contained"
            onClick={() => setLanguage("ru")}
          >
            РУ
          </Button>
          <Button
            sx={{ float: "right", margin: 1 }}
            variant="contained"
            onClick={() => setLanguage("en")}
          >
            EN
          </Button>
          <Button
            sx={{ marginLeft: "auto" }}
            variant="contained"
            onClick={() => setLogin(false)}
          >
            {text.signOut}
          </Button>
        </ul>
      ) : null}
      ;
    </>
  );
};
export default NavBar;
