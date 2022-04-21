import {FC, useState} from "react";
import {useUserContext} from "./UserContext";
import {Button, Grid, Paper, TextField} from "@mui/material";
import {users} from "../hw3andLecture4/users";
import {useGlobalContext} from "../hw3andLecture4/Context";


const LoginPage: FC = () => {
    const {setLogin} = useUserContext();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const {language} = useGlobalContext();


    const paper = {padding: 30, height: '100%', width: 280, margin: "20px auto"}
    const button = {margin: '8px 0', backgroundColor: '#333'}
    const text = {marginTop: '8px'}

    const handleLogin = () => {
        const check = users.map((item) => {
            return (item.email === email && item.password === password);
        })
        setLogin(check.filter((item) => item)[0]);
    }

    return (
        <>
            <Grid>
                <Paper elevation={12} style={paper}>
                    <Grid>
                        {language === 'en' ? <h2>Sign In</h2> : <h2>Логин</h2>}
                    </Grid>
                    {language === 'en' ?
                        <>
                            <TextField label='Email' placeholder='Enter email' value={email} style={text} fullWidth
                                       required
                                       onChange={(e) => setEmail(e.target.value)}/>
                            <TextField label='Password' placeholder='Enter password' value={password} style={text}
                                       type='password' fullWidth required
                                       onChange={(e) => setPassword(e.target.value)}/>
                            <Button type='submit' variant="contained" style={button} fullWidth
                                    onClick={handleLogin}>Sign in</Button>
                        </>
                        :
                        <>
                            <TextField label='Почтовый адрес' placeholder='Введите свой почтовый адрес' value={email} style={text} fullWidth
                                       required
                                       onChange={(e) => setEmail(e.target.value)}/>
                            <TextField label='Пароль' placeholder='Введите свой пароль' value={password} style={text}
                                       type='password' fullWidth required
                                       onChange={(e) => setPassword(e.target.value)}/>
                            <Button type='submit' variant="contained" style={button} fullWidth
                                    onClick={handleLogin}>Войти</Button>
                        </>}

                </Paper>
            </Grid>
        </>
    )
}
export default LoginPage;