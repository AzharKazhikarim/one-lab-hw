import { FC, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../hw3andLecture4/Context";
import { Box, List, styled, TextField } from "@mui/material";
import { users } from "../hw3andLecture4/users";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ListItemText from "@mui/material/ListItemText";
import { useLanguageContext } from "./LanguageContext";

const UserList: FC = () => {
  const { translations } = useLanguageContext();
  const text = translations.userList;
  const inputEl = useRef<HTMLInputElement>(null!);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <BoxStyled>
        <h1>{text.userListTitle}</h1>
        <TextField
          ref={inputEl}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label={text.searchLabel}
          sx={{ background: "white" }}
          fullWidth
          required
        />

        <List
          dense
          sx={{
            width: "100%",
            margin: "15px 0",
            bgcolor: "background.paper",
            borderRadius: 4,
          }}
        >
          {users
            .filter((user) => {
              if (
                user.fullName
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase())
              ) {
                return user;
              }
            })
            .map((item) => (
              <Link
                to={`user/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ width: "100%", padding: 2, textDecoration: 0 }}
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {item.fullName.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${item.fullName}`} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
      </BoxStyled>
    </>
  );
};

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin-top: -8px;
  height: 100%;
  padding: 2px;
`;
export default UserList;
