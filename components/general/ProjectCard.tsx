import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Project } from "../../interfaces/Project";
import { useAppSelector } from "../../store/hook";

interface Props {
    project: Project
}

export default function ProjectCard({project}: Props) {
  const { isLoggedIn } = useAppSelector(state => state.account);

  return (
    <Box className="project-card">
      <h2 style={{color: "#666666"}}>{project.name}</h2>
      <p>{project.description}</p>
      <div >
        <Button
          sx={{marginRight: "5px"}}
          target={"_blank"}
          href={project.url}
          LinkComponent={Link}
          className="button"
        >
          View Project
        </Button>
        {isLoggedIn && (
          <Button
            href={`/projects/edit/${project.id}`}
            LinkComponent={Link}
            className="button"
          >
            Edit Project
          </Button>
        )}
        <p>Link: {project.url}</p>
      </div>
    </Box>
  );
}
