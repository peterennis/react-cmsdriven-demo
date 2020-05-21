import React from "react";
import styled from "styled-components";
import { Typography, Container, Grid, Button } from "@material-ui/core";

const Hero = props => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
          dangerouslySetInnerHTML={{
            __html: props.paragraph
          }}
        ></Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                {props.firstCTA}
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                {props.secondCTA}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
