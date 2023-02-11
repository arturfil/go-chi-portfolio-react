import {
  Alert,
  Button,
  Container,
  FilledInput,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Input from "@mui/joy/Input";

import React, { useState, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { toast } from "react-toastify";
import { loginUser } from "../../features/account/accountSlice";
import { useRouter } from "next/router";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, errors } = useAppSelector(state => state.account);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(event:MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();
    await dispatch(loginUser(user));
  }

  return (
    <div className="login-body">
      <Container sx={{ paddingTop: "100px" }}>
        <Grid
          className="login-container"
          container
          spacing={3}
          sx={{ backgroundColor: "white", pr: 10, pl: 7 }}
          >
          {errors && (
            <Grid item xs={12}>
              <Alert severity="error">{errors}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography
              className="title"
              sx={{ m: "20px auto 0 auto", fontWeight: 600 }}
              variant="h3"
            >
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              value={user.email}
              type="text"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="login-input"
              placeholder="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              value={user.password}
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="login-input"
              placeholder="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={(e) => handleSubmit(e)} fullWidth className="button">
              Login
            </Button>
          </Grid>
          <Grid item>
            <p>Already have an account?</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
