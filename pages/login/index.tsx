import { Button, Container, FilledInput, Grid, TextField, Typography } from "@mui/material";
import Input from '@mui/joy/Input';

import React from "react";

export default function LoginPage() {
  return (
    <div className="login-body">
      <Container  sx={{paddingTop: "100px"}}>
        <Grid className="login-container" container spacing={3} sx={{ backgroundColor: "white", pr: 10, pl: 7}}>
            <Typography className="title" sx={{m: "20px auto 0 auto", fontWeight: 600}} variant="h3">Sign In</Typography>
          <Grid item xs={12}>
            <Input className="login-input" placeholder="email" />
          </Grid>
          <Grid item xs={12}>
            <Input className="login-input" placeholder="password" />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth className="button">Login</Button>
          </Grid>
          <Grid item>
            <p>Already have an account?</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
