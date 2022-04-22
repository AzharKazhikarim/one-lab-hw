import { FC, useState } from "react";
import { useUserContext } from "./UserContext";
import { Button, Grid, Paper, TextField, styled } from "@mui/material";
import { users } from "../hw3andLecture4/users";
import { useGlobalContext } from "../hw3andLecture4/Context";

const LoginPage: FC = () => {
  const { setLogin } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { language } = useGlobalContext();

  const handleLogin = () => {
    users.map((user) => {
      if (user.email === email && user.password === password) setLogin(true);
    });
  };

  return (
    <Grid>
      <StyledPaper elevation={12}>
        <Grid>{language === "en" ? <h2>Sign In</h2> : <h2>Логин</h2>}</Grid>
        {language === "en" ? (
          <>
            <StyledTextField
              label="Email"
              placeholder="Enter email"
              value={email}
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              label="Password"
              placeholder="Enter password"
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
              Sign in
            </StyledButton>
          </>
        ) : (
          <>
            <StyledTextField
              label="Почтовый адрес"
              placeholder="Введите свой почтовый адрес"
              value={email}
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              label="Пароль"
              placeholder="Введите свой пароль"
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
              Войти
            </StyledButton>
          </>
        )}
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

// use styled in material ui, seperate style section from logic
// do not use React Fragment<></> if it is not needed
// name your variables logically correct when you map users use (user) = >, not item
//material ui has Form component with built-in effective things, use it here because you are creating form
//handle login
