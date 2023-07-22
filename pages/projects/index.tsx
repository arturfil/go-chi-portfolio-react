import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/general/ProjectCard";
import { getAllProjects } from "../../features/projects/projectSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const projects = [
    {
        id: "8912348-091234-0918234-0981234",
        name: "Fut Bit Server",
        author: "Arturo Filio",
        url: "https://github.com/arturfil/chi_soccer_backend",
        description: "backend project in Go where I want to create an analysis application for soccer",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-02341-0918234-0981235",
        name: "Fut Bit Client",
        author: "Arturo Filio",
        url: "https://github.com/arturfil/nextjs_chi_soccer",
        description: "front end project with Nextjs & Redux where I want to create an analysis application for soccer",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-091234-0918234-0981234",
        name: "Forms Server",
        author: "Arturo Filio",
        url: "https://github.com/arturfil/R2D2S_Forms_backend",
        description: "backend project in Java, for users to create polls and see analysis of polls",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-02341-0918234-0981235",
        name: "Forms Client",
        author: "Arturo Filio",
        url: "https://github.com/arturfil/R2D2S_Forms_frontend",
        description: "front end project with React, for users to create polls and see analysis of polls",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    }
]

export default function Projects() {
  const dispatch = useAppDispatch();

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
