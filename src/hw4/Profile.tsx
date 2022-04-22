import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../hw3andLecture4/Context";
import { users } from "../hw3andLecture4/users";
import { Avatar, Box, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { UserInterface } from "./UserInterface";

const Profile: FC = () => {
  const [user, setUser] = useState<UserInterface>();
  const { id } = useParams();
  const { language } = useGlobalContext();

  useEffect(() => {
    users.map((user) => {
      if (user?.id === Number(id)) {
        setUser(user);
      }
    });
  }, [id]);

  return (
    <>
      <Box
        sx={{
          borderRadius: 5,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "350px",
            height: "100%",
            padding: 2,
          }}
        >
          <Avatar sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}>
            A
          </Avatar>

          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <BoxStyled>
                {language === "en" ? (
                  <h4>Full Name:</h4>
                ) : (
                  <h4>Полное имя: </h4>
                )}
              </BoxStyled>
              <BoxStyled>
                {language === "en" ? <h4>City: </h4> : <h4>Город: </h4>}
              </BoxStyled>
              <BoxStyled>
                {language === "en" ? <h4>Address: </h4> : <h4>Адрес: </h4>}
              </BoxStyled>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
              }}
            >
              <BoxStyled>
                {language === "en" ? (
                  <h5>{user?.fullName}</h5>
                ) : (
                  <h4>Полное имя: </h4>
                )}
              </BoxStyled>
              <BoxStyled>
                {language === "en" ? <h5>{user?.city} </h5> : <h4>Город: </h4>}
              </BoxStyled>
              <BoxStyled>
                {language === "en" ? (
                  <h5>{user?.address} </h5>
                ) : (
                  <h4>Адрес: </h4>
                )}
              </BoxStyled>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const BoxStyled = styled(Box)`
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export default Profile;
