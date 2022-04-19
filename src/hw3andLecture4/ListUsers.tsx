import {FC, useContext} from "react";
import {users} from "./users";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {deepOrange} from "@mui/material/colors";
import {Box, List} from "@mui/material";
import {Link} from "react-router-dom";
import {useGlobalContext} from "./Context";

const ListUsers: FC = () => {
    const {language} = useGlobalContext()
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '400px',
                marginTop: -8,
                height: '100%',
                padding: 2,
            }}>

                {(language === 'en') ? (<h1>List of Users</h1>) : <h1>Список пользователей</h1>}

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
            </Box>
        </>
    )
}
export default ListUsers;