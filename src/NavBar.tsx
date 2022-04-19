import {FC} from "react";
import * as React from "react";
import {Button} from "@mui/material";
import {useGlobalContext} from "./hw3/Context";
import {Link} from "react-router-dom";

const NavBar: FC = () => {
    const {language,setLanguage} = useGlobalContext()
    console.log(language)
    return (
        <>
            <ul className={"navbar-ul"}>
                <li className={"navbar-li"}><Link to={'/counter'}>Counter</Link></li>
                <li className={"navbar-li"}><Link to={'/todo'}>Todo</Link></li>
                <li className={"navbar-li"}><Link to={'/users'}>Users</Link></li>
                <Button  sx={{float:"right", margin:1}} variant="contained" onClick={() => setLanguage('ru')}>
                    RU
                </Button>
                <Button sx={{float:"right" , margin:1}} variant="contained" onClick={() => setLanguage('en')}>
                    EN
                </Button>
            </ul>

        </>
    )
}
export default NavBar;