import { Input } from "@mui/joy";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { editProject, getSingleProject } from "../../../features/projects/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

export default function EditPage() {
  const dispatch = useAppDispatch();
  const { singleProject } = useAppSelector(state => state.projects);
  const [project, setProject] = useState({
    id: "",
    author: "",
    url: "",
    name: "",
    description: "",
  });
  const router = useRouter();
  const id = router.query["id"];

  useEffect(() => {
    if (!id) return;
    dispatch(getSingleProject(id));
  }, [id]);
  
  useEffect(() => {
    if (!singleProject) return;
    setProject({
      id: singleProject?.id as string,
      author: singleProject?.author,
      url: singleProject?.url,
      name: singleProject?.name,
      description: singleProject?.description
    })
  }, [singleProject])

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(editProject(project));
    router.push("/");
  }

  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Grid container spacing={2} sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Grid item>
          <Typography variant="h4" sx={{fontWeight: "bold"}}>Edit Project</Typography>
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
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            value={project.description}
            className="login-input"
            placeholder="description"
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSubmit} fullWidth className="button">
            Edit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
