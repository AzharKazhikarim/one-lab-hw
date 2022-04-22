import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../hw3andLecture4/users";
import { Avatar, Box, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useLanguageContext } from "./LanguageContext";
import { UserInterface } from "./UserInterface";

const Profile: FC = () => {
  const { translations } = useLanguageContext();
  const text = translations.profile;
  const [user, setUser] = useState<UserInterface>();
  const { id } = useParams();

  useEffect(() => {
    users.map((user) => {
      if (user?.id === Number(id)) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      <BoxStyled2>
        <BoxStyled3>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}/>
        
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <BoxStyled>
              <h4>{text.fullName}</h4>
              <h5>{user?.fullName}</h5>
            </BoxStyled>
            <BoxStyled>
              <h4>{text.city}</h4>
              <h5>{user?.city} </h5>
            </BoxStyled>
            <BoxStyled>
              <h4>{text.address}</h4>
              <h5>{user?.address} </h5>
            </BoxStyled>
          </Box>
        </BoxStyled3>
      </BoxStyled2>
    </>
  );
};
const BoxStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BoxStyled2 = styled(Box)`
  border-radius: 5px;
  background-color: white;
  justify-content: center;
`;
const BoxStyled3 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 100%;
  padding: 8px;
`;
export default Profile;
