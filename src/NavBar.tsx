import {FC} from "react";
import * as React from "react";
import {Button, Switch} from "@mui/material";
import {useGlobalContext} from "./hw3andLecture4/Context";
import {Link} from "react-router-dom";

const NavBar: FC = () => {
    const {setLanguage} = useGlobalContext()
    const {dark, toggleDark} = useGlobalContext()

    return (
        <>
            {dark ? <ul className={"navbar-ul"}>
                    <li className={"navbar-li"}><Link to={'/counter'}>Counter</Link></li>
                    <li className={"navbar-li"}><Link to={'/todo'}>Todo</Link></li>
                    <li className={"navbar-li"}><Link to={'/users'}>Users</Link></li>
                    <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                        RU
                    </Button>
                    <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                        EN
                    </Button>
                </ul>
                : <ul className={"navbar-ul"} style={{background: 'red'}}>
                    <li className={"navbar-li"}><Link to={'/counter'}>Counter</Link></li>
                    <li className={"navbar-li"}><Link to={'/todo'}>Todo</Link></li>
                    <li className={"navbar-li"}><Link to={'/users'}>Users</Link></li>
                    <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                        RU
                    </Button>
                    <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                        EN
                    </Button>
                </ul>}
            <Switch defaultChecked color="default" sx={{float:'right'}} onClick={() => toggleDark(!dark) }/>

        </>
    )
}
export default NavBar;