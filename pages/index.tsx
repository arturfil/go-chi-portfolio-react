import Image from "next/image";
import { Container } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import image from "../assets/analytics.png";
import Link from "next/link";
import YoutubeVideo from "../components/general/YoutubeVideo";

export default function Home() {

  return (
    <>
      <Container sx={{mb: 10}}>
      <div className="curve2"></div>
      <div className="curve"></div>
        <div className="home">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                height: "50vh",
                lineBreak: "10px",
              }}
            >
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  padding: 40,
                }}
              >
                <Typography className="title" fontWeight={"bold"} variant="h2">
                  Welcome to my portfolio
                </Typography>
                <p className="paragraph">
                  I am a Software Engineer, currently doing Golang, Java,
                  Typescript in the backend and React NextJS in the front end
                </p>
                <Button LinkComponent={Link} href="/projects" sx={{ maxWidth: 120 }} className="button">
                  See Projects
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image
                priority={true}
                className="image"
                style={{
                  alignSelf: "center",
                  width: "100%",
                  maxHeight: "400px",
                  minHeight: "auto",
                  margin: "0 auto",
                }}
                src={image}
                alt={"Portfolio"}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container className="videos" sx={{display: "flex"}}>
        <Container sx={{display: "flex", justifyContent: "space-around"}}>
          <Grid container sx={{margin: "0 auto", display: "flex", justifyContent: "center"}}>
            <Grid item lg={12} md={12} sm={12}>
              <Typography className="green-color" sx={{paddingTop: 10, width: "200px"}}  variant="h3" fontWeight={"bold"}>
                Videos
              </Typography>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/rzr1F5NOylk"}/>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/PahysD2vc3s"}/>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/JBrF5yviZKE"}/>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/9UTKrdHvKrE"}/>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/QF9luSCW0aM"}/>
            </Grid>
            <Grid item lg={6} md={6}>
              <YoutubeVideo  url={"https://www.youtube.com/embed/2KYyhJnaZzs"}/>
            </Grid>
           </Grid>
        </Container>
      </Container>
        <Box className="areas">
            <Container  sx={{m: 0, p: 0}}>
              <Typography className="blue-color" sx={{paddingTop: 10, width: "500px"}}  variant="h3" fontWeight={"bold"}>
                Areas Of Knowledge
              </Typography>
              <p className="areas-of-knowledge-text">
              C#, Dart,
    Docker, DigitalOcean, Django, Flutter, Git, Golang, Java, Kubernetes, Kotlin, Linux, MySQL, MSSQL, MongoDB, Networks, NetCore, NodeJS, Python, PostgreSQL, Redux, SCSS, SQLite, Typescript, Unity.
              </p>
            </Container>
        </Box>
    </>
  );
}
