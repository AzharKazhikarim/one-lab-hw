import { FC, useState } from "react";
import { useUserContext } from "./UserContext";
import { Button, Grid, Paper, styled, TextField } from "@mui/material";
import { users } from "../hw3andLecture4/users";
import { useLanguageContext } from "./LanguageContext";

const LoginPage: FC = () => {
  const { setLogin } = useUserContext();
  const { translations } = useLanguageContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const text = translations.login;
  
  const handleLogin = () => {
    users.map((user) => {
      if (user.email === email && user.password === password) setLogin(true);
    });
  };

  return (
    <Grid>
      <StyledPaper elevation={12}>
        <StyledTextField
          label={text.enterEmailLabel}
          placeholder={text.enterEmailPlaceholder}
          value={email}
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label={text.enterPasswordLabel}
          placeholder={text.enterPasswordPlaceholder}
          value={password}
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          {text.buttonSignIn}
        </StyledButton>
      </StyledPaper>
    </Grid>
  );
};

export default LoginPage;

const StyledPaper = styled(Paper)`
  padding: 30px;
  height: 100%;
  width: 280px;
  margin: 20px;
`;

const StyledTextField = styled(TextField)`
  margin-top: 8px;
`;

const StyledButton = styled(Button)`
  margin: 8px 0px;
  backgroundcolor: #333;
`;
