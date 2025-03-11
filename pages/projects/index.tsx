import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/general/ProjectCard";
import futbits from  "../../images/futbits.jpg"
import thinkeasy from "../../images/think_easy_landing.png"

const projects = [
    {
        id: "8912348-091234-0918234-0981234",
        name: "Fut Bits",
        author: "Arturo Filio",
        url: "http://futbits.com",
        img: futbits,
        description: "FullStack Project with Go, PostgresQL, Next.js, Typescript, Redux & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-02341-0918234-0981235",
        name: "Think Easy",
        author: "Arturo Filio",
        url: "https://thinkeasy.one/landing",
        img: thinkeasy,
        description: "Full Stack Project with Go (Golang) PostgresQL, Docker, Next.js, Tailwind, Typescript, Zustand, & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
]

export default function Projects() {

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
