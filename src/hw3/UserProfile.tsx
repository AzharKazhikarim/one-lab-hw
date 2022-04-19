import {FC, useEffect, useState} from "react";
import {Avatar, Box, Button, styled} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {useParams} from "react-router-dom";
import {users} from "./users";
import {useGlobalContext} from "./Context";

const UserProfile: FC = () => {
    const [user, setUser] = useState({});
    const {id} = useParams<string>();
    const {language} = useGlobalContext()


    return (
        <>
            <Box
                sx={{
                    borderRadius: 5,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    justifyContent: 'center'
                }}
            >
                <Avatar sx={{bgcolor: deepOrange[500]}}>A</Avatar>
                <BoxStyled>
                    {(language === 'en') ? <h4>Name Surname: </h4> : <h4>Полное имя: </h4>} <h5>fkfk</h5>
                </BoxStyled>
                <BoxStyled>
                    {(language === 'en') ? <h4>City: </h4> : <h4>Город: </h4>} <h5>fkfk</h5>
                </BoxStyled>
                <BoxStyled>
                    {(language === 'en') ? <h4>Address: </h4> : <h4>Адрес: </h4>} <h5>fkfk</h5>
                </BoxStyled>
            </Box>
        </>
    )
}

const BoxStyled = styled(Box)`
  padding: 5px;
  display: flex;
  align-items: center;
`;
export default UserProfile;