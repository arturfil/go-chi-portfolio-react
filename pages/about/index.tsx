import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
// import cv from '../../assets/Arturo_Resume_v2_2022.pdf';

export default function About() {
  return (
    <Container>
      <Typography
        sx={{ maxWidth: "230px", mt: 3}}
        className="green-color"
        variant="h3"
        fontWeight={"bold"}
      >
        About me
      </Typography>
      <div
        style={{
          width: "50px",
          display: "flex",
          justifyContent: "start",
          padding: "2px 10px",
          backgroundColor: "#0fdd84",
        }}
      ></div>
      <div className="about-me-text">
        <p>
          I always like to improve my knowledge and improve and hone my skills
          but in general I like to learn new things, new languages, new
          instruments, new games or any new hoby.
        </p>
        <p>
          I earned a degree in Computer Science with a minor in Math and also a
          Major in Finance and Economics with a minor in Management.
        </p>
        <p>
          I like to develope fun and interesting yet useful software. I always
          like to help people learn and get into IT and Software Engineering, I
          think this field is so vast and interesting that the more people
          working in this field, the better.
        </p>
        <p>
          Some people feel that they are limited or not capable to accomplish complex things in general
          but I am a firm believer that who ever sets their mind to a goal, 
          nothing can stop them. This way of thinking has helped to be where I am and 
          defines who I am.
        </p>
      </div>
      <Typography
        sx={{ maxWidth: "440px", fontWeight: "bold", mt: 6 }}
        variant="h4"
        className="green-color"
      >
        Some Hobbies Of Mine
      </Typography>
      <div
        style={{
          width: "50px",
          display: "flex",
          justifyContent: "start",
          padding: "2px 10px",
          backgroundColor: "#0fdd84",
        }}
      ></div>
      <p className="about-me-text">
        I normally like to play music like guitar or piano. I am a ver
        competitive soccer player, playing almost 5 days a week and I like to
        occasionally play chess.
      </p>
    </Container>
  );
}
