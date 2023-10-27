import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/general/ProjectCard";
import futbits from  "../../images/futbits.jpg"
import bughunt from "../../images/bughunt.jpg"
import coffeegallery from '../../images/coffeegallery.jpg'
import artstudio from '../../images/artstudio.jpg'

const projects = [
    {
        id: "8912348-091234-0918234-0981234",
        name: "Fut Bits",
        author: "Arturo Filio",
        url: "http://futbits.com",
        img: futbits,
        description: "FullStack Project with Go, PostgresQL, Nextjs, Redux & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-02341-0918234-0981235",
        name: "Bug Hunt",
        author: "Arturo Filio",
        url: "http://52.14.110.171",
        img: bughunt,
        description: "Full Stack Project with MERN stack & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-091234-0918234-0981234",
        name: "Coffee Gallery",
        author: "Arturo Filio",
        url: "http://3.142.172.122",
        img: coffeegallery,
        description: "Full Stack project with MERN stack & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    },
    {
        id: "8912348-02341-0918234-0981235",
        name: "ArtStudio",
        author: "Arturo Filio",
        url: "http://192.241.139.139",
        img: artstudio,
        description: "E-Commerce Application with Angular 5, .Net, MySQL & AWS ec2",
        created_at: "2-3-2023",
        updated_at: "2-3-2023",
    }
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
