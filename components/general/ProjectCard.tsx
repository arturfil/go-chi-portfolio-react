import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Project } from "../../interfaces/Project";

interface Props {
    project: Project
}

export default function ProjectCard({project}: Props) {
  return (
    <Box className="project-card">
      <h2 style={{color: "#666666"}}>{project.name}</h2>
      <p>{project.description}</p>
      <div>
        <Button
          target={"_blank"}
          href={project.url}
          LinkComponent={Link}
          className="button"
        >
          View Project
        </Button>
        <p>Link: {project.url}</p>
      </div>
    </Box>
  );
}
