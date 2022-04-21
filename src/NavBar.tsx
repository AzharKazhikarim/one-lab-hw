import {FC} from "react";
import * as React from "react";
import {Avatar, Box, Button, Switch} from "@mui/material";
import {useGlobalContext} from "./hw3andLecture4/Context";
import {Link} from "react-router-dom";
import {useUserContext} from "./hw4/UserContext";

const NavBar: FC = () => {
    const {setLanguage} = useGlobalContext()
    const {dark, toggleDark} = useGlobalContext()
    const {login, setLogin} = useUserContext();

    return (
        <>
            {dark ? <ul className={"navbar-ul"}>

                    {login ? <>
                            <li className={"navbar-li"}><Link to={'/counter'}>Counter</Link></li>
                            <li className={"navbar-li"}><Link to={'/todo'}>Todo</Link></li>
                            <li className={"navbar-li"}><Link to={'/'}>Users</Link></li>
                            <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                                RU
                            </Button>
                            <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                                EN
                            </Button>
                            <Avatar sx={{background: 'blue', marginLeft: 'auto'}}>A</Avatar>
                            <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLogin(false)}>
                                SIGN OUT
                            </Button>
                        </> :
                        <>
                            <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                                RU
                            </Button>
                            <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                                EN
                            </Button>
                        </>}

                </ul>
                : <ul className={"navbar-ul"} style={{background: 'red'}}>

                    {login ? <>

                        <li className={"navbar-li"}><Link to={'/counter'}>Counter</Link></li>
                        <li className={"navbar-li"}><Link to={'/todo'}>Todo</Link></li>
                        <li className={"navbar-li"}><Link to={'/'}>Users</Link></li>
                        <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                            RU
                        </Button>
                        <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                            EN
                        </Button>
                        <Avatar sx={{background: 'blue', marginLeft: 'auto'}}>A</Avatar>
                        <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLogin(false)}>
                            SIGN OUT
                        </Button>
                    </> : <>
                        <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('ru')}>
                            RU
                        </Button>
                        <Button sx={{float: "right", margin: 1}} variant="contained" onClick={() => setLanguage('en')}>
                            EN
                        </Button>
                    </>}
                </ul>}
            <Switch defaultChecked color="default" sx={{float: 'right'}} onClick={() => toggleDark(!dark)}/>

        </>
    )
}
export default NavBar;