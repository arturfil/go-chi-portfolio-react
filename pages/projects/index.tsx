import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProjectCard from "../../components/general/ProjectCard";
import { getAllProjects } from "../../features/projects/projectSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const projects = [
  {
    id: "aasd-890124-flkj1234-0981234",
    url: "http://192.241.139.139/",
    author: "Arturo",
    name: "Artstudio",
    description: "This project was built with angular2, .Net Core, strrip, mysql and deployed on a linux server"
  },
  {
    id: "aasd-asdfasd-flkj1234-0981234",
    url: "http://104.236.46.105",
    author: "Arturo",
    name: "Meet Down",
    description: "This project was built with React Ts, Redux, .Net Core, strrip, mysql and deployed on a linux server"
  },
  {
    id: "9-0asfd-a-sdf9-fasd-flkj1234-0981234",
    url: "http://forms-frontend.s3-website.us-east-2.amazonaws.com/",
    author: "Arturo",
    name: "R2D2 Forms",
    description: "For this project I used Java Spring Boot Mysql and React Redux deployed on an AWS server "
  },
  {
    id: "aasd-1234ljk9-fasd-flkj1234-0981234",
    url: "https://play.google.com/store/apps/details?id=com.arturofilio.dogecoin_tracker",
    author: "Arturo",
    name: "Doge Tracker",
    description: "This project was built with React Native Ts, MongDb and SQLite"
  },
  {
    id: "8-asdf-890asdf-908asd-890-1423lk-4123fsad-90-afas",
    url: "http://18.119.104.10",
    author: "Arturo",
    name: "Bug Hunt",
    description: "This project was built with React.js, MongDb and Node deployed on AWS Linux Server"
  },
  {
    id: "-asdf-9-0asdf-1423lk-4123fsad-90-afas",
    url: "http://3.142.136.168",
    author: "Arturo",
    name: "Coffee Gallery",
    description: "For this project I used Node MongoDB React and deployed this to AWS Linux Server"
  },
  {
    id: "90-asfd9-04jjlk1243ljk13-90-asdf-asfd-90-1234jkl1235",
    url: "https://arturocode.com",
    author: "Arturo",
    name: "Coding Blog",
    description: `
      Created with Golang, Postgres, docker compose, postgresql and React Nextjs deployed in AWS Linux server. \
      If for some reason the content doesn't appear in the cards try this url to see the golang api working:
      https://arturocode.com/api/v1/posts
    `
  },
]

export default function Projects() {
  const dispatch = useAppDispatch();
  // const { projects } = useAppSelector((state) => state.projects);

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
