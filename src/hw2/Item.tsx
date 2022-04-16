import {FC, useEffect, useState} from "react";
import * as React from "react";
import {
    Alert,
    Button,
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemText, Snackbar,
    styled,
} from "@mui/material";

interface Props {
    id: number;
    desc: string;
    done: boolean;
    handleStatus: (itemId: number) => void;
    handleDelete: (itemId: number) => void;
}

const Item: FC<Props> = ({id, desc, done, handleStatus, handleDelete}) => {

    const [disable, setDisable] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(()=>{
        setInterval((async () => setOpenAlert(false)), 2000)
    },[openAlert])

    useEffect(() => {
        if (done) {
            setDisable(true);
        }
    }, [done])

    return (
        <>
            <div className="itemWrapper">
                <ListItem key={id} disabled={disable}>
                    <ListItemButton>
                        <ListItemText key={id} primary={desc}/>
                    </ListItemButton>
                    <Checkbox edge="end" onClick={() => {
                        setOpenAlert(true);
                        handleStatus(id);
                    }} checked={done}/>
                </ListItem>
                <ButtonStyled onClick={() => handleDelete(+id)} variant="contained">
                    Delete
                </ButtonStyled>
            </div>

            <Snackbar open={openAlert}>
                <Alert severity="success" sx={{width: '250px', textAlign:'center'}}>
                    Good Job!
                </Alert>
            </Snackbar>
        </>
    );
};

const ButtonStyled = styled(Button)`
  background: #9B2D30;
  margin: 10px;
`;

export default Item;
