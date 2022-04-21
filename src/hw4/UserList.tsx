import {FC, useRef, useState} from "react";
import {useGlobalContext} from "../hw3andLecture4/Context";
import {Box, Button, List, styled, TextField} from "@mui/material";
import {users} from "../hw3andLecture4/users";
import {Link} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const UserList: FC = () => {
    const {language} = useGlobalContext()
    const inputEl = useRef<HTMLInputElement>(null);
    const [input,setInput] = useState<string>();

    const handleSearch = () => {
        inputEl.current?.focus();
    }

    return (
        <>
            <BoxStyled>
                {(language === 'en') ? (<h1>List of Users</h1>) : <h1>Список пользователей</h1>}
                <TextField
                    ref={inputEl} value = {input} onChange={e => setInput(e.target.value)}
                    label='Email' placeholder='Enter email'
                    sx={{marginBottom: 2, background: 'white'}}
                    fullWidth required/>
                <Button type='submit' variant="contained"  fullWidth
                        onClick={handleSearch}>Find</Button>
                <List dense sx={{width: '100%', bgcolor: 'background.paper', borderRadius: 4}}>
                    {
                        users.map((item) => (
                            <Link to={`user/${item.id}`} key={item.id}>
                                <ListItem
                                    key={item.id}
                                    disablePadding
                                    sx={{width: '100%', padding: 2, textDecoration: 0}}
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar sx={{bgcolor: deepOrange[500]}}>{item.fullName.charAt(0)}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={`${item.fullName}`}/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </BoxStyled>
        </>
    )
}

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin-top: -8px;
  height: 100%;
  padding: 2px;
`
export default UserList;