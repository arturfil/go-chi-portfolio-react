import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProjectCard from "../../components/general/ProjectCard";
import { getAllProjects } from "../../features/projects/projectSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

export default function Projects() {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  return (
    <Container sx={{mb: 3}}>
      <Typography className="title" variant="h2" fontWeight={'bold'}
        sx={{display: "flex", marginY: 5, textAlign: "center"}}>My Projects
      </Typography>
      <Grid container spacing={3} sx={{}}>
        {projects && projects.map((project) => (
            <Grid item key={project.id} sx={{margin:"0 auto"}}>
              <ProjectCard project={project} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
