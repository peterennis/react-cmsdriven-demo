import React from "react";
import styled from "styled-components";
import { Typography, Link } from "@material-ui/core";

const FooterSticky = styled.footer`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const CallToAction = props => {
  return (
    <FooterSticky>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        The best Elegant shop ever
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Made with cmsdriven
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </FooterSticky>
  );
};
export default CallToAction;
