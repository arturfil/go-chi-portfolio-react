import { Input } from "@mui/joy";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, MouseEvent } from "react";
import { createProject } from "../../features/projects/projectSlice";
import { useAppDispatch } from "../../store/hook";

export default function CreatePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [project, setProject] = useState({
    author: "",
    url: "",
    name: "",
    description: "",
  });

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(createProject(project));
    router.push("/");
  }

  return (
    <div className="">
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={2} sx={{maxWidth: 600, margin: "0 auto"}}>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Create New Project
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Input
              onChange={(e) => setProject({ ...project, author: e.target.value })}
              value={project.author}
              className="login-input"
              placeholder="author"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => setProject({ ...project, url: e.target.value })}
              value={project.url}
              className="login-input"
              placeholder="url"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              value={project.name}
              className="login-input"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => setProject({ ...project, description: e.target.value })}
              value={project.description}
              className="login-input"
              placeholder="description"
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit} fullWidth className="button">
              Create
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
